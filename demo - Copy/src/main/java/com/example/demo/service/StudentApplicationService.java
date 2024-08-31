package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.StudentApplication;
import com.example.demo.repository.StudentApplicationRepository;

@Service
public class StudentApplicationService {
    @Autowired
    private StudentApplicationRepository repository;

    public StudentApplication saveStudentApplication(StudentApplication application) {
        return repository.save(application);
    }

    public List<StudentApplication> getAllApplications() {
        return repository.findAll();
    }
}