package com.proposal.entity;
import jakarta.persistence.*;
import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="pac_members")
public class PacMember {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String memberName;

    private String email;

    private String contactNumber;

    private String departmentName;

    private String designation;
}