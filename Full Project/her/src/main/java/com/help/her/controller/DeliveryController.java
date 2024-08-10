package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.help.her.model.Delivery;
import com.help.her.service.DeliveryService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/deliveries")
@CrossOrigin(origins = "http://localhost:3000")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @PostMapping("/request")
    public ResponseEntity<?> createDelivery(@RequestBody Delivery delivery) {
        try {
            Delivery newDelivery = deliveryService.saveDeliveryRequest(delivery);
            return ResponseEntity.ok(newDelivery);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllDeliveries() {
        try {
            List<Delivery> deliveryList = deliveryService.getAllDeliveries();
            return ResponseEntity.ok(deliveryList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDeliveryById(@PathVariable Long id) {
        try {
            Optional<Delivery> delivery = deliveryService.getDeliveryById(id);
            return delivery.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateDelivery(@PathVariable Long id, @RequestBody Delivery delivery) {
        try {
            if (deliveryService.getDeliveryById(id).isPresent()) {
                delivery.setId(id);
                Delivery updatedDelivery = deliveryService.saveDeliveryRequest(delivery);
                return ResponseEntity.ok(updatedDelivery);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDelivery(@PathVariable Long id) {
        try {
            if (deliveryService.getDeliveryById(id) != null) {
                deliveryService.deleteDelivery(id);
                return ResponseEntity.ok().build();
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
