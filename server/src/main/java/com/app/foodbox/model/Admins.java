package com.app.foodbox.model;

import javax.persistence.*;

import org.springframework.transaction.annotation.EnableTransactionManagement;

@Entity
@Table(name = "admins")
@EnableTransactionManagement
public class Admins {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;
	
	@Column(name= "email")
	private String email;
	
	@Column(name ="username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "mobile")
	private long mobile;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	
	

}
