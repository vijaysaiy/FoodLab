package com.app.foodbox.repository;


import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.foodbox.model.Users;
@Repository
@Transactional
public interface UserRepository extends CrudRepository<Users, Integer>{

	

    Object findByEmailAndPassword(String email, String pwd);

    void deleteByEmail(String email);

	

}
