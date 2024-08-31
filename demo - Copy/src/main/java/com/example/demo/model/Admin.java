package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "admins")
@Getter
@Setter
public class Admin {

    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;
    private String password;
   
}
