package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.help.her.model.Complaint;
import com.help.her.service.ComplaintService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @PostMapping("/file")
    public ResponseEntity<?> fileComplaint(@RequestBody Complaint complaint) {
        try {
            Complaint newComplaint = complaintService.saveComplaint(complaint);
            return ResponseEntity.ok(newComplaint);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllComplaints() {
        try {
            List<Complaint> complaintList = complaintService.getAllComplaints();
            return ResponseEntity.ok(complaintList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getComplaintById(@PathVariable Long id) {
        try {
            Optional<Complaint> complaint = complaintService.getComplaintById(id);
            if (complaint.isPresent()) {
                return ResponseEntity.ok(complaint.get());
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateComplaint(@PathVariable Long id, @RequestBody Complaint updatedComplaint) {
        try {
            Optional<Complaint> complaintData = complaintService.getComplaintById(id);
            if (complaintData.isPresent()) {
                Complaint existingComplaint = complaintData.get();
                existingComplaint.setName(updatedComplaint.getName());
                existingComplaint.setAge(updatedComplaint.getAge());
                existingComplaint.setEmail(updatedComplaint.getEmail());
                existingComplaint.setPhoneNumber(updatedComplaint.getPhoneNumber());
                existingComplaint.setComplaintText(updatedComplaint.getComplaintText());
                Complaint savedComplaint = complaintService.saveComplaint(existingComplaint);
                return ResponseEntity.ok(savedComplaint);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteComplaint(@PathVariable Long id) {
        try {
            complaintService.deleteComplaint(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}