package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.help.her.model.RideRequest;
import com.help.her.service.RideRequestService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ride-requests")
@CrossOrigin(origins = "http://localhost:3000")
public class RideRequestController {

    @Autowired
    private RideRequestService rideRequestService;

    @PostMapping("/request")
    public ResponseEntity<?> requestRide(@RequestBody RideRequest rideRequest) {
        try {
            RideRequest newRequest = rideRequestService.saveRideRequest(rideRequest);
            return ResponseEntity.ok(newRequest);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllRideRequests() {
        try {
            List<RideRequest> requestList = rideRequestService.getAllRideRequests();
            return ResponseEntity.ok(requestList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRideRequestById(@PathVariable Long id) {
        try {
            Optional<RideRequest> rideRequest = rideRequestService.getRideRequestById(id);
            return rideRequest.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRideRequest(@PathVariable Long id, @RequestBody RideRequest rideRequest) {
        try {
            if (rideRequestService.getRideRequestById(id).isPresent()) {
                rideRequest.setId(id);
                RideRequest updatedRequest = rideRequestService.saveRideRequest(rideRequest);
                return ResponseEntity.ok(updatedRequest);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRideRequest(@PathVariable Long id) {
        try {
            if (rideRequestService.getRideRequestById(id)!=null) {
                rideRequestService.deleteRideRequest(id);
                return ResponseEntity.ok().build();
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
