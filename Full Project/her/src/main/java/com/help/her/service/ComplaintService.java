package com.help.her.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.help.her.model.Complaint;
import com.help.her.repository.ComplaintRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    public Complaint saveComplaint(Complaint complaint) {
        complaint.setCreatedDate(new Date());
        return complaintRepository.save(complaint);
    }

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    public Optional<Complaint> getComplaintById(Long id) {
        return complaintRepository.findById(id);
    }

    public void deleteComplaint(Long id) {
        complaintRepository.deleteById(id);
    }
}