package com.help.her.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String pickupPoint;
    private String dropPoint;
    
    private String senderName;
    private String senderPhoneNumber;
    private String senderEmail;
    
    private String receiverName;
    private String receiverPhoneNumber;
    private String receiverEmail;
    
    private Date requestDate;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getPickupPoint() { return pickupPoint; }
    public void setPickupPoint(String pickupPoint) { this.pickupPoint = pickupPoint; }
    public String getDropPoint() { return dropPoint; }
    public void setDropPoint(String dropPoint) { this.dropPoint = dropPoint; }
    public String getSenderName() { return senderName; }
    public void setSenderName(String senderName) { this.senderName = senderName; }
    public String getSenderPhoneNumber() { return senderPhoneNumber; }
    public void setSenderPhoneNumber(String senderPhoneNumber) { this.senderPhoneNumber = senderPhoneNumber; }
    public String getSenderEmail() { return senderEmail; }
    public void setSenderEmail(String senderEmail) { this.senderEmail = senderEmail; }
    public String getReceiverName() { return receiverName; }
    public void setReceiverName(String receiverName) { this.receiverName = receiverName; }
    public String getReceiverPhoneNumber() { return receiverPhoneNumber; }
    public void setReceiverPhoneNumber(String receiverPhoneNumber) { this.receiverPhoneNumber = receiverPhoneNumber; }
    public String getReceiverEmail() { return receiverEmail; }
    public void setReceiverEmail(String receiverEmail) { this.receiverEmail = receiverEmail; }
    public Date getRequestDate() { return requestDate; }
    public void setRequestDate(Date requestDate) { this.requestDate = requestDate; }
}
