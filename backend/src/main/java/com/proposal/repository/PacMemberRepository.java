package com.proposal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.proposal.entity.PacMember;

public interface PacMemberRepository
        extends JpaRepository<PacMember, Long> {
}