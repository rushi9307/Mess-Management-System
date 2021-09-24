package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.app.pojo.OwnerAdmin;


public interface IOwnerService{
	//add a method to fetch all kitchen list
	List<OwnerAdmin> fetchAllKitchens();
	
	//String addKitchenOwner(OwnerAdmin owner);
	//add a method to add new Owner
	OwnerAdmin saveOwner(OwnerAdmin transientOwner);
	
	void deleteOwner(long ownerId);
	
	OwnerAdmin getOwnerById(long id);
	
	OwnerAdmin updateOwner(OwnerAdmin owner);
	
	Optional<OwnerAdmin> authenticateOwner(String email,String password);
}
