package com.app.foodbox.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.foodbox.model.PurchaseReport;
@Repository
@Transactional
public interface PurchaseReportRepository extends CrudRepository<PurchaseReport, Integer> {

	List<PurchaseReport> findByUsername(String username);

}
