package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.help.her.model.Complaint;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
}
