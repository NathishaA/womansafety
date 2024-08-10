package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.help.her.model.Delivery;
import com.help.her.repository.DeliveryRepository;
import com.help.her.model.Login;
import com.help.her.service.LoginService;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private LoginService loginService; // Service to fetch user details

    public Delivery saveDeliveryRequest(Delivery delivery) {
        // Fetch user details using sender's email
        Login login = loginService.findByEmail(delivery.getSenderEmail());
        if (login != null) {
            delivery.setSenderPhoneNumber(login.getPhonenumber());
            delivery.setSenderName(login.getFirstName() + " " + login.getLastName()); // Combine first and last name
        } else {
            throw new RuntimeException("User not found with email: " + delivery.getSenderEmail());
        }
        delivery.setRequestDate(new Date());
        return deliveryRepository.save(delivery);
    }

    public List<Delivery> getAllDeliveries() {
        return deliveryRepository.findAll();
    }

    public Optional<Delivery> getDeliveryById(Long id) {
        return deliveryRepository.findById(id);
    }

    public void deleteDelivery(Long id) {
        deliveryRepository.deleteById(id);
    }
}
