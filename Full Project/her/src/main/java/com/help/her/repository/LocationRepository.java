package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.help.her.model.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}
