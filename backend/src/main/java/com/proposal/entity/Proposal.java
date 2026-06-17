package com.proposal.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "proposals")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Proposal{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String departmentName;
	private String title;
	private String description;
	private String date;
	private String file;
}