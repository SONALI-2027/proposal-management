package com.proposal.repository;

import com.proposal.entity.Proposal;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProposalRepository extends JpaRepository<Proposal,Long>{
	
}