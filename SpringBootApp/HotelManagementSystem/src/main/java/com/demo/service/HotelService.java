package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.model.Hotelcustomer;
import com.demo.repository.HotelInterface;

	@Service
	public class HotelService 
	{
		
			@Autowired
			private HotelInterface hrepo;
		
			
			public Hotelcustomer updateService(Hotelcustomer h1)
			{
				return hrepo.save(h1);
			}
			public Hotelcustomer insertService(Hotelcustomer h2)
			{
				return hrepo.save(h2);
			}

			public void deleteService(Hotelcustomer h3)
			{
			hrepo.delete(h3); 
			}
			
			public List<Hotelcustomer>fetchService()
			{
				return hrepo.findAll();
			}
	}
