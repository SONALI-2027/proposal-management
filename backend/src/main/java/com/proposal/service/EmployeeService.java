package com.proposal.service;

import com.proposal.dto.RegisterResponse;
import java.util.List;

import com.proposal.entity.Employee;

public interface EmployeeService {

    RegisterResponse register(Employee employee);

    Employee login(String username,String password);
    
    List<Employee> getPacMembers();
    List<Employee> getAllEmployees();

}