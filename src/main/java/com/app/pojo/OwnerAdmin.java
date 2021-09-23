package com.app.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "owner_admin_tbl")
@Setter
@Getter
public class OwnerAdmin extends BaseEntity {
	@Column(length = 20)
	@NotBlank(message = "User Name is required")
	@NotNull
	private String firstName;

	@Column(length = 20)
	@NotBlank(message = "User Last Name is required")
	@NotNull
	private String lastName;

	@NotBlank(message = "Kitchen Name is required")
	@Column(length = 20, nullable = false)
	@NotNull
	private String kitchenName;

	@NotNull
	@Column(length = 20, unique = true)
	@NotBlank(message = "User email is required")
	private String email;

	@NotBlank(message = "User password is required")
	@Length(min = 8, max = 20, message = "Invalid password length")
	@NotNull
	private String password;

	@NotNull
	private long mobileNo;

	@Column(length = 20, nullable = false)
	@NotNull
	private String address;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Role role;

	@NotNull
	private String city;

	@NotNull
	private Boolean status=false;

	@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
	@Transient
	private List<User> userList = new ArrayList<User>();

	@OneToMany(mappedBy = "ownerMenu", cascade = CascadeType.ALL, orphanRemoval = true)
	@Transient
	private List<Menu> menuList = new ArrayList<Menu>();

	
	/*
	 * @ElementCollection
	 * 
	 * @CollectionTable(name = "cities",joinColumns =@JoinColumn(name="id") )
	 * private List<City> cities=new ArrayList<>();
	 */
	 

	public OwnerAdmin(@NotBlank(message = "User Name is required") @NotNull String firstName,
			@NotBlank(message = "User Last Name is required") @NotNull String lastName,
			@NotBlank(message = "Kitchen Name is required") @NotNull String kitchenName,
			@NotNull @NotBlank(message = "User email is required") String email,
			@NotBlank(message = "User password is required") @Length(min = 8, max = 20, message = "Invalid password length") @NotNull String password,
			@NotNull long mobileNo, @NotNull String address, @NotNull Role role, @NotNull String city,
			@NotNull Boolean status) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.kitchenName = kitchenName;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.address = address;
		this.role = role;
		this.city = city;
		this.status = status;
	}

	public OwnerAdmin() {
		super();
	}
	
	public void addUser(User user) {
		userList.add(user);
		user.setOwner(this);
	}
	
	public void removeUser(User user) {
		userList.remove(user);
		user.setOwner(null);
	}
	
	public void addMenu(Menu menu) {
		menuList.add(menu);
		menu.setOwnerMenu(this);
	}
	
	public void removeMenu(Menu menu) {
		menuList.remove(menu);
		menu.setOwnerMenu(null);
	}

}
