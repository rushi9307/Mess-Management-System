package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;

@Embeddable
@AllArgsConstructor
public class City extends BaseEntity{
	@Column(length = 20,unique = true)
	private String city;

}
