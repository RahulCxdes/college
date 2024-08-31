package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.StudentApplication;

public interface StudentApplicationRepository extends JpaRepository<StudentApplication, Long> {
}