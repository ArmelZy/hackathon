package com.hackathon.challenge.controller;

import com.hackathon.challenge.dto.LoginRequest;
import com.hackathon.challenge.dto.RegisterRequest;
import com.hackathon.challenge.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody RegisterRequest registerRequest){
        authService.signup(registerRequest);
        return new ResponseEntity(HttpStatus.OK);//spring will response with the http status=ok to the client
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest){

        return authService.login(loginRequest);

    }
}
