package com.app.service;

import com.app.pojo.User;

public interface IUserService {
	
	String registerUser(User user,int ownerId);
}
