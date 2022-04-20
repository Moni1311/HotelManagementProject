package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class  Hotelcustomer 
{
	@Id
	private long contact;
	private int id;
	private String cname;
	private String email;
	private String roomtype;
	
	public Hotelcustomer() {
		
	}
	public Hotelcustomer(int id,String cname,String email,String roomtype,long contact) {
		this.id=id;
		this.cname=cname;
		this.email=email;
		this.roomtype=roomtype;
		this.contact=contact;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getRoomtype() {
		return roomtype;
	}
	public void setRoomtype(String roomtype) {
		this.roomtype = roomtype;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	
}

