package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.help.her.model.Complaint;
import com.help.her.model.Location;
import com.help.her.service.LocationService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/locations")
@CrossOrigin(origins = "http://localhost:3000")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @PostMapping("/add")
    public ResponseEntity<Location> addLocation(@RequestBody Location location) {
        Location newLocation = locationService.addLocation(location);
        return ResponseEntity.ok(newLocation);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Location>> getAllLocations() {
        List<Location> locations = locationService.getAllLocations();
        return ResponseEntity.ok(locations);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Location> updateLocation(@PathVariable Long id, @RequestBody Location locationDetails) {
        Location updatedLocation = locationService.updateLocation(id, locationDetails);
        return ResponseEntity.ok(updatedLocation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLocation(@PathVariable Long id) {
        locationService.deleteLocation(id);
        return ResponseEntity.noContent().build();
    }
}