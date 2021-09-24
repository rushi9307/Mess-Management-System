package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojo.OwnerAdmin;

//this is dao layer
@Repository
public interface OwnerRepository extends JpaRepository<OwnerAdmin, Integer>{
	//fetch data from database
	List<OwnerAdmin> findAll();
	
	OwnerAdmin save(OwnerAdmin owner);
	
	void deleteById(long ownerId);
	
	OwnerAdmin findById(long id);
	
	
	Optional<OwnerAdmin> findByEmailAndPassword(String email,String password);	
	
}
