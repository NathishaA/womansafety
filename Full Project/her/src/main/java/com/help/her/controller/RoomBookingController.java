package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.help.her.model.RoomBooking;
import com.help.her.service.RoomBookingService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:3000")
public class RoomBookingController {

    @Autowired
    private RoomBookingService roomBookingService;

    @PostMapping("/book")
    public ResponseEntity<?> bookRoom(@RequestBody RoomBooking roomBooking) {
        try {
            RoomBooking newBooking = roomBookingService.saveRoomBooking(roomBooking);
            return ResponseEntity.ok(newBooking);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllBookings() {
        try {
            List<RoomBooking> bookingList = roomBookingService.getAllRoomBookings();
            return ResponseEntity.ok(bookingList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingById(@PathVariable Long id) {
        try {
            Optional<RoomBooking> booking = roomBookingService.getRoomBookingById(id);
            if (booking.isPresent()) {
                return ResponseEntity.ok(booking.get());
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBooking(@PathVariable Long id, @RequestBody RoomBooking updatedBooking) {
        try {
            Optional<RoomBooking> bookingData = roomBookingService.getRoomBookingById(id);
            if (bookingData.isPresent()) {
                RoomBooking existingBooking = bookingData.get();
                existingBooking.setLocation(updatedBooking.getLocation());
                existingBooking.setBookingDate(updatedBooking.getBookingDate());
                existingBooking.setVacatingDate(updatedBooking.getVacatingDate());
                existingBooking.setEmail(updatedBooking.getEmail());
                existingBooking.setPhoneNumber(updatedBooking.getPhoneNumber());
                RoomBooking savedBooking = roomBookingService.saveRoomBooking(existingBooking);
                return ResponseEntity.ok(savedBooking);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long id) {
        try {
            roomBookingService.deleteRoomBooking(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
