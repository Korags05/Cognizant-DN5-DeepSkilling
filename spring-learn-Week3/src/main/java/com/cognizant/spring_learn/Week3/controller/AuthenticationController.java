package com.cognizant.spring_learn.Week3.controller;

import com.cognizant.spring_learn.Week3.model.AuthenticationResponse;
import com.cognizant.spring_learn.Week3.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate() {

        String token = jwtUtil.generateToken("user");

        return new AuthenticationResponse(token);
    }
}