package com.proposal.entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="role_id")
    private Role role;

    private String name;
    private String email;
    private String contactNumber;
    private String departmentName;
    private String username;
    private String password;
    private boolean pacCommitteeMember;

    @OneToMany(mappedBy="employee")
    private List<Proposal> proposals;
}