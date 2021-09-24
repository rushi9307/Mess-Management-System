package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojo.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long>{
	
	@Query(value="select m.* from menu m where m.owner_id=?1", nativeQuery=true)
	List<Menu> findMenuByOwnerId(Long ownerId);
	
}
