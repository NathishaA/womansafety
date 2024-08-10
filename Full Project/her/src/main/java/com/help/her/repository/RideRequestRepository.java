package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.help.her.model.RideRequest;

@Repository
public interface RideRequestRepository extends JpaRepository<RideRequest, Long> {
}