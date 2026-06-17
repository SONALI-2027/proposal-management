package com.proposal.service;
import com.proposal.entity.Proposal;
import java.util.List;

public interface ProposalService {
	Proposal saveProposal(Proposal proposal);
	List<Proposal> getAll();
}

