package com.app.foodbox.repository;

import java.util.List;
import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.foodbox.model.Products;


@Repository
@Transactional
public interface ProductRepository extends CrudRepository<Products, Integer>{
	
	List<Products> findAllByIsEnabledTrue();

	List<Products> findByCategory(String category);

	Iterable<Products> findAllByNameContainingIgnoreCase(String name);

	List<Products> findByName(String name);

    


	

}
