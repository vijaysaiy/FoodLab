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

import com.app.foodbox.model.Users;
import com.app.foodbox.repository.UserRepository;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {

	@Autowired
	UserRepository userrespository;
	
	//get all users	
	@GetMapping("all")
	public List<Users> getAllUsers(){
		return (List<Users>) userrespository.findAll();
	}

	//Login
	@PostMapping("login")
	public Users login(@RequestBody Users user) throws LoginException {
		String email = user.getEmail();
		String pwd = user.getPassword();
		Users userObj = null;
		if(email != null && pwd != null){
			userObj = (Users) userrespository.findByEmailAndPassword(email, pwd);
		}
		if(userObj == null){
			 throw new LoginException("Bad Credentials");
		}
		return userObj;
	}
	
	//add users	
	@PostMapping("add")
	public Users addUsers(@RequestBody Users user) {
		return userrespository.save(user);
	}
	
	//update User
	@PutMapping("update/{id}")
	public Users updateUser(@RequestBody Users user) {
		return userrespository.save(user);
	}
	
	//delete users
	@DeleteMapping("delete/{id}")
	public void deleteUser(@PathVariable int id) {
		userrespository.deleteById(id); 
	}
}
