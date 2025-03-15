package com.salma.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "certificates")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    @ManyToOne
    @JoinColumn(name = "participation_type_id", nullable = false)
    private ParticipationType participationType;

    @Column(nullable = false)
    private String filePath;

    @ManyToOne
    @JoinColumn(name = "signed_by", nullable = false)
    private User signedBy;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CertificateStatus status = CertificateStatus.PENDING;

    @Column(nullable = false)
    private LocalDateTime issuedAt = LocalDateTime.now();
}
