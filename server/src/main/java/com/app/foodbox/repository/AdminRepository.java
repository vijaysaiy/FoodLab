package com.app.foodbox.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.foodbox.model.Admins;


@Repository
@Transactional
public interface AdminRepository extends CrudRepository<Admins, Integer>{

	void deleteByUsername(String username);

	Object findByEmailAndPassword(String email, String pwd);

}
