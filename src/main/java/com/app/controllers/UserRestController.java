package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserRestController {
	@Autowired
	private IUserService userService;
	
	 @PostMapping("/addUser/{ownerId}")
	  public ResponseEntity<?> saveUser(@RequestBody User user,@PathVariable int ownerId){
		  System.out.println("in saveUser Method");
		  System.out.println("in saveUser method of controller "+user);
		  return ResponseEntity.ok(userService.registerUser(user, ownerId));
	  }
}
