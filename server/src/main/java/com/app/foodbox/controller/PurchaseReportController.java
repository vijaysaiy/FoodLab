package com.app.foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.foodbox.model.PurchaseReport;
import com.app.foodbox.repository.PurchaseReportRepository;

@RestController
@RequestMapping("purchase")
@CrossOrigin
public class PurchaseReportController {
	@Autowired
	PurchaseReportRepository purchaserepository;

	// get all purchase reports

	@GetMapping("all")
	public List<PurchaseReport> getAllPurchases() {
		return (List<PurchaseReport>) purchaserepository.findAll();
	}
	//add products in reports
	@PostMapping("/add")
	public PurchaseReport addProduct(@RequestBody PurchaseReport product) {
		return purchaserepository.save(product);
	}
	// delete the report
	@DeleteMapping("delete/{id}")
	public void deletePurchase(@PathVariable int id) {
		purchaserepository.deleteById(id);
	}

	// search purchase by username

	@GetMapping("search/{username}")
	public List<PurchaseReport> searchUserReport(@PathVariable String username) {
		return purchaserepository.findByUsername(username);
	}

}
