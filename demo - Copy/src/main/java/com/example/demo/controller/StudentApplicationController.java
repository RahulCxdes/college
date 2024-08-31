package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.StudentApplication;
import com.example.demo.service.StudentApplicationService;

@RestController
@RequestMapping("/admission")
@CrossOrigin(origins = "*")
public class StudentApplicationController {
    @Autowired
    private StudentApplicationService service;

    @PostMapping
    public StudentApplication submitApplication(@RequestBody StudentApplication application) {
        return service.saveStudentApplication(application);
    }

    @GetMapping
    public List<StudentApplication> getAllApplications() {
        return service.getAllApplications();
    }
}