package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.help.her.model.RideRequest;
import com.help.her.repository.RideRequestRepository;
import com.help.her.model.Login;
import com.help.her.service.LoginService;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RideRequestService {

    @Autowired
    private RideRequestRepository rideRequestRepository;

    @Autowired
    private LoginService loginService; // Service to fetch user details

    public RideRequest saveRideRequest(RideRequest rideRequest) {
        // Fetch user details using email
        Login login = loginService.findByEmail(rideRequest.getEmail());
        if (login != null) {
            rideRequest.setPhoneNumber(login.getPhonenumber());
            rideRequest.setName(login.getFirstName() + " " + login.getLastName()); // Combine first and last name
        } else {
            throw new RuntimeException("User not found with email: " + rideRequest.getEmail());
        }
        rideRequest.setRequestDate(new Date());
        return rideRequestRepository.save(rideRequest);
    }

    public List<RideRequest> getAllRideRequests() {
        return rideRequestRepository.findAll();
    }

    public Optional<RideRequest> getRideRequestById(Long id) {
        return rideRequestRepository.findById(id);
    }

    public void deleteRideRequest(Long id) {
        rideRequestRepository.deleteById(id);
    }
}
