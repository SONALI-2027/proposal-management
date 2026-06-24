package com.proposal.controller;

import com.proposal.dto.ReviewRequest;
import com.proposal.entity.Proposal;
import com.proposal.service.ProposalService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import java.net.MalformedURLException;

import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;

@RestController
@RequestMapping("/api/proposals")
@CrossOrigin(origins="*")
public class ProposalController {

    private final ProposalService service;

    public ProposalController(ProposalService service) {
        this.service = service;
    }

    @GetMapping
    public List<Proposal> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Proposal saveProposal(
            @ModelAttribute Proposal proposal,
            @RequestParam("file") MultipartFile file) {

        proposal.setFile(file.getOriginalFilename());
        proposal.setStatus("UNDER_REVIEW");
        proposal.setReview("");

        return service.saveProposal(proposal);
    }

    @PutMapping("/{id}/review")
    public Proposal reviewProposal(
            @PathVariable Long id,
            @RequestBody ReviewRequest request) {

        return service.reviewProposal(
                id,
                request.getReview());
    }

    @PutMapping("/{id}/approve")
    public Proposal approveProposal(
            @PathVariable Long id) {

        return service.approveProposal(id);
    }
    
    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> downloadProposal(
            @PathVariable Long id) {

        Proposal proposal =
                service.getProposalById(id);

        Path path =
                Paths.get(proposal.getFile());

        Resource resource;

try {
    resource = new UrlResource(path.toUri());
} catch (MalformedURLException e) {
    throw new RuntimeException("Unable to load file resource", e);
}

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename="
                                + resource.getFilename())
                .body(resource);
    }
    
    @GetMapping("/{id}")
    public Proposal getProposal(
    		@PathVariable Long id) {
    	return service.getProposalById(id);
    }
}