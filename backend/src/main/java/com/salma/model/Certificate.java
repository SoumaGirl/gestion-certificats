package com.salma.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "certificates")
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String recipientName;
    private String eventName;
    private LocalDate issueDate;

    @Lob
    private byte[] pdfData;  // To store the generated PDF in the database (optional)

    public Certificate() {}

    public Certificate(String recipientName, String eventName, LocalDate issueDate) {
        this.recipientName = recipientName;
        this.eventName = eventName;
        this.issueDate = issueDate;
    }

    public Long getId() {
        return id;
    }

    public String getRecipientName() {
        return recipientName;
    }

    public String getEventName() {
        return eventName;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public byte[] getPdfData() {
        return pdfData;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setRecipientName(String recipientName) {
        this.recipientName = recipientName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public void setPdfData(byte[] pdfData) {
        this.pdfData = pdfData;
    }
}

