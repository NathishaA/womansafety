package com.help.her.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; // Import for PUT mapping
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.help.her.model.Login;
import com.help.her.service.LoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<?> createLogin(@RequestBody Login login) {
        if (loginService.emailExists(login.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Email already exists"));
        }

        if (loginService.phonenumberExists(login.getPhonenumber())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Phone number already exists"));
        }

        Login newLogin = loginService.createLogin(login);
        return ResponseEntity.ok(Map.of("success", true, "message", "Registration successful", "login", newLogin));
    }

    @GetMapping
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable Long id) {
        return loginService.getLoginById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/users")
    public List<Login> getAllUsers() {
        return loginService.getAllLogins();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLogin(@PathVariable Long id) {
        if (loginService.getLoginById(id).isPresent()) {
            loginService.deleteLogin(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/check")
    public ResponseEntity<?> checkLogin(@RequestBody Login login) {
        Login existingLogin = loginService.findByEmail(login.getEmail());
        if (existingLogin != null && existingLogin.getPassword().equals(login.getPassword())) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Login successful!");
            response.put("role", existingLogin.getRole());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("success", false, "message", "Invalid email or password"));
        }
    }

    @PutMapping("/{id}") // Add this method for updating Login
    public ResponseEntity<?> updateLogin(@PathVariable Long id, @RequestBody Login login) {
        try {
            Login updatedLogin = loginService.updateLogin(id, login);
            return ResponseEntity.ok(Map.of("success", true, "message", "Login updated successfully", "login", updatedLogin));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
