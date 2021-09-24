package com.app.controllers;

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

import com.app.pojo.Menu;
import com.app.service.IMenuService;

@RestController
@RequestMapping("/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuRestController {
	@Autowired
	private IMenuService menuService;
	
	@GetMapping("/list/{ownerId}")
	public List<Menu> fetchMenuList(@PathVariable int ownerId){
		return menuService.getMenuList(ownerId);
	}
	
	@PostMapping("/addMenu/{ownerId}")
	public ResponseEntity<?> addMenu(@RequestBody Menu menu,@PathVariable int ownerId) {
		return new ResponseEntity<>(menuService.addMenu(menu, ownerId),HttpStatus.CREATED);
	}
	
	@GetMapping("/getMenu/{menuId}")
	public Optional<Menu> fetchMenu(@PathVariable int menuId) {
		return menuService.fetchMenuById(menuId);
	}
	
	@PutMapping("/updateMenu/{ownerId}")
	public String updateMenu(@PathVariable int ownerId,@RequestBody Menu menu){
		return menuService.updateMenu(menu,ownerId);
	}
	
	@DeleteMapping("/deleteMenu/{menuId}/{ownerId}")
	public String deleteMenu(@PathVariable int menuId, @PathVariable int ownerId) {
		return menuService.deleteMenu(menuId, ownerId);
	}
}
