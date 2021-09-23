package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.pojo.OwnerAdmin;
import com.app.pojo.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private IOwnerService ownerService;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public String registerUser(User user,int ownerId) {
		OwnerAdmin owner=ownerService.getOwnerById(ownerId);
		owner.addUser(user);
		userRepository.save(user);
		return "User Added successfully";
	}

}
