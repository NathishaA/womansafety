package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.help.her.model.RoomBooking;
import com.help.her.repository.RoomBookingRepository;
import com.help.her.model.Login;
import com.help.her.service.LoginService;

import java.util.List;
import java.util.Optional;

@Service
public class RoomBookingService {

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    @Autowired
    private LoginService loginService;

    public RoomBooking saveRoomBooking(RoomBooking roomBooking) {
        // Fetch user details using email
        Login login = loginService.findByEmail(roomBooking.getEmail());
        if (login != null) {
            roomBooking.setPhoneNumber(login.getPhonenumber());
            roomBooking.setName(login.getFirstName() + " " + login.getLastName());
        } else {
            throw new RuntimeException("User not found with email: " + roomBooking.getEmail());
        }
        return roomBookingRepository.save(roomBooking);
    }

    public List<RoomBooking> getAllRoomBookings() {
        return roomBookingRepository.findAll();
    }

    public Optional<RoomBooking> getRoomBookingById(Long id) {
        return roomBookingRepository.findById(id);
    }

    public void deleteRoomBooking(Long id) {
        roomBookingRepository.deleteById(id);
    }
}
