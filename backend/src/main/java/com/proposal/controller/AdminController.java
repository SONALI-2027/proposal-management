package com.proposal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.proposal.entity.Employee;
import com.proposal.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins="*")
public class AdminController {

    private final AdminService service;

    public AdminController(AdminService service) {
        this.service = service;
    }

    @GetMapping("/pac-members")
    public List<Employee> getPacMembers() {

        return service.getPacMembers();
    }

    @PutMapping("/add-pac/{id}")
    public Employee addPacMember(
            @PathVariable Long id) {

        return service.addPacMember(id);
    }

    @DeleteMapping("/delete-member/{id}")
    public void deleteMember(
            @PathVariable Long id) {

        service.deleteMember(id);
    }

}