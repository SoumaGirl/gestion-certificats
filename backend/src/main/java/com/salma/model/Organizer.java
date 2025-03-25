package com.salma.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "organizers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Organizer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phoneNumber;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }


}
