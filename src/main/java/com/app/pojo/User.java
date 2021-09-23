package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user_tbl")
@Setter
@Getter
public class User extends BaseEntity{
	@Column(length = 20)
	@NotBlank(message = "User Name is required")
	@NotNull
	private String firstName;
	
	@Column(length = 20)
	@NotBlank(message = "User Last Name is required")
	@NotNull
	private String lastName;
	
	@Column(length = 20, unique = true)
	@NotBlank(message = "User email is required")
	@NotNull
	private String email;
	
	@NotBlank(message = "User password is required")
	@Length(min = 8,max=20,message = "Invalid password length")
	@NotNull
	private String password;
	
	@NotNull
	private long mobileNo;
	
	@Column(length = 20,nullable = false)
	@NotNull
	private String address;
	
	@NotNull
	private String city;
	
	
	private LocalDate fromDate;
	
	private LocalDate toDate;
	
	private int counter;
	
	private String menuName;
	
	@ManyToOne
	@JoinColumn(name = "ownerId")
	private OwnerAdmin owner;
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(@NotBlank(message = "User Name is required") @NotNull String firstName,
			@NotBlank(message = "User Last Name is required") @NotNull String lastName,
			@NotBlank(message = "User email is required") @NotNull String email,
			@NotBlank(message = "User password is required") @Length(min = 8, max = 20, message = "Invalid password length") @NotNull String password,
			@NotNull long mobileNo, @NotNull String address, @NotNull String city) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.address = address;
		this.city = city;
	}
	
	
	
}
