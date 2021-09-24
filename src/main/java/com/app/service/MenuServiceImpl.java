package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.MenuRepository;
import com.app.dao.OwnerRepository;
import com.app.pojo.Menu;
import com.app.pojo.OwnerAdmin;

@Service
@Transactional
public class MenuServiceImpl implements IMenuService{
	@Autowired
	private MenuRepository menuRepository;
	
	@Autowired
	private OwnerRepository ownerRepository;

	@Override
	public List<Menu> getMenuList(long ownerId) {
		
		return menuRepository.findMenuByOwnerId(ownerId);
	}

	@Override
	public String addMenu(Menu menu, long ownerId) {
		OwnerAdmin owner=ownerRepository.findById(ownerId);
		owner.addMenu(menu);
		menuRepository.save(menu);
		return "Menu added successfully";
	}

	@Override
	public Optional<Menu> fetchMenuById(long menuId) {
		
		return menuRepository.findById(menuId);
	}

	@Override
	public String updateMenu(Menu menu,long ownerId) {
		OwnerAdmin owner=ownerRepository.findById(ownerId);
		menu.setOwnerMenu(owner);
		menuRepository.save(menu);
		return "Menu updated succefully";
	}

	@Override
	public String deleteMenu(long menuId, long ownerId) {
		OwnerAdmin owner=ownerRepository.findById(ownerId);
		Menu menu=menuRepository.getById(menuId);
		owner.removeMenu(menu);
		return "Menu Deleted Succefully";
	}
	
	

}
