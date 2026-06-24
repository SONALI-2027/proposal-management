package com.proposal.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "proposals")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Proposal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String groupHeadName;
    private String projectCoordinator;
    private String departmentName;
    private String title;
    private String description;
    private String date;
    private String file;
    private String status;

    @Column(length = 1000)
    private String review;

    @ManyToOne
    @JoinColumn(name="employee_id")
    private Employee employee;
}