package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.help.her.model.Login;
import com.help.her.repository.LoginRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login createLogin(Login login) {
        return loginRepository.save(login);
    }

    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    public Optional<Login> getLoginById(Long id) {
        return loginRepository.findById(id);
    }

    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }

    public Login findByEmail(String email) {
        return loginRepository.findByEmail(email);
    }
    // public Optional<Login> findByEmail(String email) {
    //     return loginRepository.findByEmail(email);
    // }

    public Login findByPhonenumber(String phonenumber) {
        return loginRepository.findByPhonenumber(phonenumber);
    }

    public boolean emailExists(String email) {
        return loginRepository.findByEmail(email) != null;
    }

    public boolean phonenumberExists(String phonenumber) {
        return loginRepository.findByPhonenumber(phonenumber) != null;
    }

    // Update Operation
    public Login updateLogin(Long id, Login login) {
        Optional<Login> existingLogin = loginRepository.findById(id);
        if (existingLogin.isPresent()) {
            Login loginToUpdate = existingLogin.get();
            loginToUpdate.setEmail(login.getEmail());
            loginToUpdate.setFirstName(login.getFirstName());
            loginToUpdate.setLastName(login.getLastName());
            loginToUpdate.setPassword(login.getPassword());
            loginToUpdate.setPhonenumber(login.getPhonenumber());
            loginToUpdate.setRole(login.getRole());
            return loginRepository.save(loginToUpdate);
        }
        throw new RuntimeException("Login not found with id " + id);
    }
}
