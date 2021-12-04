package com.app.foodbox.model;

import javax.persistence.*;

import org.springframework.transaction.annotation.EnableTransactionManagement;

@Entity
@Table(name = "products")
@EnableTransactionManagement
public class Products {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "description", length = 65555)
	private String description;

	@Column(name = "imgSrc")
	private String imgSrc;

	@Column(name = "category")
	private String category;

	@Column(name = "price")
	private int price;

	@Column(name = "isEnabled")
	private boolean isEnabled = true;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImgSrc() {
		return imgSrc;
	}

	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}

	public boolean isEnabled() {
		return isEnabled;
	}

	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}

}
