package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.help.her.model.Location;
import com.help.her.repository.LocationRepository;
import com.help.her.model.Login;
import com.help.her.service.LoginService;

import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private LoginService loginService; // Service to fetch user details

    public Location addLocation(Location location) {
        try {
            Login login = loginService.findByEmail(location.getEmail());
            if (login != null) {
                location.setPhoneNumber(login.getPhonenumber());
                location.setName(login.getFirstName() + " " + login.getLastName()); // Combine first and last name
            } else {
                throw new RuntimeException("User not found with email: " + location.getEmail());
            }
            return locationRepository.save(location);
        } catch (Exception e) {
            // Log the error
            System.err.println("Error in addLocation: " + e.getMessage());
            throw e;
        }
    }
    
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    public Location updateLocation(Long id, Location locationDetails) {
        Location location = locationRepository.findById(id).orElseThrow(() -> 
            new RuntimeException("Location not found with id: " + id));
        location.setLocation(locationDetails.getLocation());
        location.setEmail(locationDetails.getEmail());
        location.setPhoneNumber(locationDetails.getPhoneNumber());
        location.setName(locationDetails.getName());
        return locationRepository.save(location);
    }

    public void deleteLocation(Long id) {
        if (!locationRepository.existsById(id)) {
            throw new RuntimeException("Location not found with id: " + id);
        }
        locationRepository.deleteById(id);
    }
}