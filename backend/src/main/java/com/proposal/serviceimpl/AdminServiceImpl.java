package com.proposal.serviceimpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.proposal.entity.Employee;
import com.proposal.entity.Role;
import com.proposal.repository.EmployeeRepository;
import com.proposal.repository.RoleRepository;
import com.proposal.service.AdminService;
import com.proposal.entity.PacMember;
import com.proposal.repository.PacMemberRepository;

@Service
public class AdminServiceImpl implements AdminService {

    private final EmployeeRepository employeeRepo;
    private final PacMemberRepository pacMemberRepo;
    private final RoleRepository roleRepo;
public AdminServiceImpl(
        EmployeeRepository employeeRepo,
        RoleRepository roleRepo,
        PacMemberRepository pacMemberRepo) {

    this.employeeRepo = employeeRepo;
    this.roleRepo = roleRepo;
    this.pacMemberRepo = pacMemberRepo;
}

    @Override
    public List<Employee> getPacMembers() {
        return employeeRepo.findByPacCommitteeMemberTrue();
    }

   @Override
public Employee addPacMember(Long employeeId) {

    Employee employee =
            employeeRepo.findById(employeeId)
                        .orElseThrow();

    Role role =
            roleRepo.findByRoleName("PAC_MEMBER");

    employee.setPacCommitteeMember(true);
    
    employee.setRole(role);

    Employee savedEmployee = employeeRepo.save(employee);

    PacMember pacMember = new PacMember();

    pacMember.setMemberName(savedEmployee.getName());
    pacMember.setEmail(savedEmployee.getEmail());
    pacMember.setContactNumber(savedEmployee.getContactNumber());
    pacMember.setDepartmentName(savedEmployee.getDepartmentName());
    pacMember.setDesignation("PAC_MEMBER");

    pacMemberRepo.save(pacMember);

    return savedEmployee;
}

    @Override
    public void deleteMember(Long employeeId) {

        Employee employee =
                employeeRepo.findById(employeeId)
                            .orElseThrow();

        employeeRepo.delete(employee);
    }
}