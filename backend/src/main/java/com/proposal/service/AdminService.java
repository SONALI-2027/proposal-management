package com.proposal.service;

import com.proposal.entity.Employee;
import java.util.List;

public interface AdminService {

    List<Employee> getPacMembers();

    Employee addPacMember(Long employeeId);

    void deleteMember(Long employeeId);
}