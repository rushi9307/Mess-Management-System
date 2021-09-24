package com.app.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.OwnerAdmin;
import com.app.service.IOwnerService;

@RestController
@RequestMapping("/kitchen")
@CrossOrigin(origins = "http://localhost:3000")
public class OwnerRestController {
	//dependency : service layer interface
	@Autowired
	private IOwnerService ownerService;
	
	public OwnerRestController() {
		System.out.println("in ctor of OwnerRestController() "+getClass().getName());
	}



	//write a request handling method to fetch kitchen list
	@GetMapping("/list/{city}")
	public List<OwnerAdmin> fetchAllKitchenList(@PathVariable String city){
		System.out.println("in fetchAllKitchens method "+getClass().getName());
		List<OwnerAdmin> ownerList=ownerService.fetchAllKitchens();
		List<OwnerAdmin> list=new ArrayList<>();
		for(OwnerAdmin own:ownerList) {
			if(own.getStatus() && own.getCity().equals(city)) {
				list.add(own);
			}
		}
		return list;
	}
	
	
	/*
	 * @PostMapping("/addOwner") public String addKitchenOwner(OwnerAdmin owner) {
	 * System.out.println("in addKitchenOwner method "+getClass().getName()); return
	 * ownerService.addKitchenOwner(owner); }
	 */
	  @PostMapping("/addOwner")
	  public ResponseEntity<?> saveOwner(@RequestBody OwnerAdmin owner){
		  System.out.println("in saveOwner Method");
		  System.out.println("in saveOwner method of controller "+owner);
		  return new ResponseEntity<>(ownerService.saveOwner(owner), HttpStatus.CREATED);
	  }
	  
	  @DeleteMapping("/deleteOwner/{id}")
	  public void deleteOwner(@PathVariable int id) {
		  System.out.println("Owner id delete ="+id);
		  ownerService.deleteOwner(id);
	  }
	  
	  @GetMapping("/getOwnerById/{id}")
	  public OwnerAdmin getOwnerById(@PathVariable int id) {
		  System.out.println("Owner id fetch ="+id);
		  return ownerService.getOwnerById(id);
	  }
	  
	  @PutMapping("/updateOwner")
	  public ResponseEntity<?> updateOwner(@RequestBody OwnerAdmin owner) {
		  owner.setStatus(true);
		  return ResponseEntity.ok(ownerService.updateOwner(owner));
	  }
	  
	  @GetMapping("/authenticateOwner/{email}/{password}")
	  public Optional<OwnerAdmin> authenticateOwner(@PathVariable String email,@PathVariable String password) {
		  return ownerService.authenticateOwner(email, password);
	  }
}
