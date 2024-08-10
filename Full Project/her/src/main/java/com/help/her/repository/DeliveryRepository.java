package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.help.her.model.Delivery;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Long> {
}
