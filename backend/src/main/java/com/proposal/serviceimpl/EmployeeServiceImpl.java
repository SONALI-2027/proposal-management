package com.proposal.serviceimpl;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.List;
import org.springframework.stereotype.Service;

import com.proposal.dto.RegisterResponse;
import com.proposal.entity.Employee;
import com.proposal.repository.EmployeeRepository;
import com.proposal.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repo;
    private final BCryptPasswordEncoder encoder;
    private final RoleRepository roleRepo;
private final PacMemberRepository pacMemberRepo;

    public EmployeeServiceImpl(EmployeeRepository repo,
                               BCryptPasswordEncoder encoder,RoleRepository roleRepo,PacMemberRepository pacMemberRepo) {
        this.repo = repo;
        this.encoder = encoder;
    }

 @Override
public RegisterResponse register(Employee employee) {

    long count = repo.count() + 1;

    String number = String.format("%03d", count);

    String username = "NIC@PAC" + number;
    String rawPassword = "nic@" + number;

    employee.setUsername(username);
    employee.setPassword(encoder.encode(rawPassword));

    if(employee.isPacCommitteeMember()) {

        Role pacRole =
                roleRepo.findByRoleName("PAC_MEMBER");

        employee.setRole(pacRole);
    }
    else {

        Role empRole =
                roleRepo.findByRoleName("EMPLOYEE");

        employee.setRole(empRole);
    }

    Employee savedEmployee = repo.save(employee);

    if(savedEmployee.isPacCommitteeMember()) {

        PacMember pacMember = new PacMember();

        pacMember.setMemberName(savedEmployee.getName());
        pacMember.setEmail(savedEmployee.getEmail());
        pacMember.setContactNumber(savedEmployee.getContactNumber());
        pacMember.setDepartmentName(savedEmployee.getDepartmentName());
        pacMember.setDesignation("PAC_MEMBER");

        pacMemberRepo.save(pacMember);
    }

    return new RegisterResponse(username, rawPassword);
}
   @Override
public Employee login(String username, String password) {

    Employee employee = repo.findByUsername(username);

    if (employee != null &&
            encoder.matches(password, employee.getPassword())) {

        return employee;
    }

    return null;
}
    @Override
    public List<Employee> getAllEmployees() {

        return repo.findAll();
    }
    @Override
    public List<Employee> getPacMembers() {
        return repo.findByPacCommitteeMember(true);
    }
}