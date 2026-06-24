package com.proposal.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;


import com.proposal.entity.Proposal;
import com.proposal.repository.ProposalRepository;
import com.proposal.service.ProposalService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProposalServiceImpl implements ProposalService{
	private final ProposalRepository repo;
	
	
	
	public ProposalServiceImpl(ProposalRepository repo) {
		this.repo=repo;
	}
	
	@Override
	public Proposal saveProposal(Proposal proposal) {
		return repo.save(proposal);
	}
	
	public List<Proposal> getAll(){
		return repo.findAll();
	}
	
	 @Override
	    public Proposal reviewProposal(
	            Long id,
	            String review) {

	        Proposal proposal =
	                repo.findById(id).orElse(null);

	        proposal.setReview(review);

	        proposal.setStatus("CHANGES_REQUIRED");

	        return repo.save(proposal);
	    }
	 @Override
	 public Proposal getProposalById(Long id) {

	     return repo.findById(id)
	                .orElseThrow();
	 }

	    @Override
	    public Proposal approveProposal(Long id) {

	        Proposal proposal =
	                repo.findById(id).orElse(null);

	        proposal.setStatus("APPROVED");

	        return repo.save(proposal);
	    }
}