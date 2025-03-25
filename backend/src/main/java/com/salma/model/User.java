package com.salma.model;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Transient
    private String token;
    ; // Enum for roles (ADMIN, ORGANIZER, PARTICIPANT)

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }


    public void setToken(String token) {
    }

    public JsonAppend.Prop getRole() {
        JsonAppend.Prop role = null;
        return role;
    }
}
