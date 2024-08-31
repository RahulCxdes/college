package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Admin;


public interface AdminRepository extends JpaRepository<Admin, String> {
    Admin findByUsername(String username);
}