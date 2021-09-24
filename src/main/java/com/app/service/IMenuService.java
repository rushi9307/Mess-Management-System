package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojo.Menu;

public interface IMenuService {
	List<Menu> getMenuList(long ownerId);
	
	String addMenu(Menu menu,long ownerId);
	
	Optional<Menu> fetchMenuById(long menuId);
	
	String updateMenu(Menu menu,long ownerId);
	
	String deleteMenu(long menuId, long ownerId);
}
