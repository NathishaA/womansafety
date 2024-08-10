package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.help.her.model.RoomBooking;

@Repository
public interface RoomBookingRepository extends JpaRepository<RoomBooking, Long> {
}
