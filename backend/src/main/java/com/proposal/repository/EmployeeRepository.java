package com.proposal.repository;

import java.util.List;

import com.proposal.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository
        extends JpaRepository<Employee, Long> {

    Employee findByUsername(String username);

    List<Employee> findByPacCommitteeMember(boolean pacCommitteeMember);

    List<Employee> findByPacCommitteeMemberTrue();
}