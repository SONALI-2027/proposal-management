package com.proposal.controller;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.proposal.entity.Employee;
import com.proposal.service.EmployeeService;
import com.proposal.dto.RegisterResponse;
@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins="*")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public RegisterResponse register(
            @RequestBody Employee employee) {

        return service.register(employee);

    }
    @PostMapping("/login")
    public Employee login(
            @RequestParam String username,
            @RequestParam String password) {

        return service.login(username, password);
    }
    
    @GetMapping("/pac-members")
    public List<Employee> getPacMembers() {
        return service.getPacMembers();
    }
    
    @GetMapping
    public List<Employee> getAllEmployees() {

        return service.getAllEmployees();
    }

}