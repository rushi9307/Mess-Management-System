package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OwnerRepository;
import com.app.pojo.OwnerAdmin;

@Service
@Transactional
public class OwnerServiceImpl implements IOwnerService {
	//dependency : dao layer interface
	@Autowired
	private OwnerRepository ownerRepository;

	
	@Override
	public List<OwnerAdmin> fetchAllKitchens() {
		// this method fetches list of kitchen name from database
		return ownerRepository.findAll();
	}


	
	/*
	 * @Override public String addKitchenOwner(OwnerAdmin owner) { OwnerAdmin
	 * kitchenOwner=OwnerRepository.save(owner); if(kitchenOwner!=null) return
	 * "Owner Added successfully"; else return "Owner addition failed"; }
	 */ 
	@Override
	public OwnerAdmin saveOwner(OwnerAdmin transientOwner) {
		// this method will add a new Owner into the rushirasoi database
		return ownerRepository.save(transientOwner);
	}



	@Override
	public void deleteOwner(long ownerId) {
		ownerRepository.deleteById(ownerId);
		
	}



	@Override
	public OwnerAdmin getOwnerById(long id) {
		
		return ownerRepository.findById(id);
	}



	@Override
	public OwnerAdmin updateOwner(OwnerAdmin owner) {
		return ownerRepository.save(owner);	
	}



	@Override
	public Optional<OwnerAdmin> authenticateOwner(String email, String password) {
		return ownerRepository.findByEmailAndPassword(email, password);
	}
	
	

}
