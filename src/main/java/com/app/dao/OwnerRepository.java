package com.app.dao;

import java.util.List;

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
	
	OwnerAdmin getById(long id);
	
	@Query(value = "select o.* from owner_admin_tbl o where o.email=?1 and o.password=?2", nativeQuery = true)
	OwnerAdmin authenticateOwner(String email,String password);
	
	
	
	
	
}
