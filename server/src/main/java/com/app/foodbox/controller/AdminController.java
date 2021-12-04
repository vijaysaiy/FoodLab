package com.app.foodbox.controller;
import java.util.List;

import javax.security.auth.login.LoginException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.foodbox.model.Admins;
import com.app.foodbox.repository.AdminRepository;

@RestController
@RequestMapping("admins")
@CrossOrigin
public class AdminController {

	@Autowired
	AdminRepository adminrespository;
	
	//get all users	
	@GetMapping("all")
	public List<Admins> getAllAdmins(){
		return (List<Admins>) adminrespository.findAll();
	}
	
	//Login
	@PostMapping("login")
	public Admins login(@RequestBody Admins user) throws LoginException {
		String email = user.getEmail();
		String pwd = user.getPassword();
		Admins userObj = null;
		if(email != null && pwd != null){
			userObj = (Admins) adminrespository.findByEmailAndPassword(email, pwd);
		}
		if(userObj == null){
			 throw new LoginException("Bad Credentials");
		}
		return userObj;
	}
	//add users	
	@PostMapping("add")
	public Admins addUsers(@RequestBody Admins user) {
		return adminrespository.save(user);
	}
	
	//update User
	@PutMapping("update/{username}")
	public Admins updateUser(@RequestBody Admins user) {
		return adminrespository.save(user);
	}
	
	//delete users
	@DeleteMapping("delete/{usename}")
	public void deleteUser(@PathVariable String username) {
		adminrespository.deleteByUsername(username);
	}
}
