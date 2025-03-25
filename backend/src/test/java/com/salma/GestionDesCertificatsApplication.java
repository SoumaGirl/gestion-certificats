package com.salma;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.salma.model") // Scanner le package des entités
public class GestionDesCertificatsApplication {
	public static void main(String[] args) {
		SpringApplication.run(GestionDesCertificatsApplication.class, args);
	}
}
