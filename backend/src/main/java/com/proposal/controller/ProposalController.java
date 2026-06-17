package com.proposal.controller;

import com.proposal.entity.Proposal;
import com.proposal.service.ProposalService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
@RestController
@RequestMapping("/api/proposals")
@CrossOrigin(origins="*")
public class ProposalController{
	private final ProposalService service;
	
	public ProposalController(ProposalService service) {
		this.service=service;
	}
	@GetMapping
	public List<Proposal> getAll(){
		return service.getAll();
	}
	
	@PostMapping
	public Proposal saveProposal(
	        @RequestParam("departmentName") String departmentName,
	        @RequestParam("title") String title,
	        @RequestParam("date") String date,
	        @RequestParam("description") String description,
	        @RequestParam("file") MultipartFile file
	) {
		return service.saveProposal(propsal);
	}
}