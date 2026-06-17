package com.proposal.serviceimpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;


import com.proposal.entity.Proposal;
import com.proposal.repository.ProposalRepository;
import com.proposal.service.ProposalService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProposalServiceImpl implements ProposalService{
	private final ProposalRepository repo;
	
	 @Autowired
	    private BCryptPasswordEncoder passwordEncoder;
	}
	
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
}