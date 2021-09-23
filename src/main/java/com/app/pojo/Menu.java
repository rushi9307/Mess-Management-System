package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "menu")
@Setter
@Getter
public class Menu extends BaseEntity{
	
	@Column(length = 20, unique = true)
	@NotBlank(message = "Thali name is required")
	@NotNull
	private String thaliName;
	
	@Column(length = 250)
	@NotNull
	private String describeThali;
	
	@NotNull
	private double price;
	
	@ManyToOne
	@JoinColumn(name = "ownerId")
	private OwnerAdmin ownerMenu;
	
	public Menu() {
		// TODO Auto-generated constructor stub
	}

	public Menu(@NotBlank(message = "Thali name is required") @NotNull String thaliName, @NotNull String describeThali,
			@NotNull double price) {
		super();
		this.thaliName = thaliName;
		this.describeThali = describeThali;
		this.price = price;
	}
	
	

}
