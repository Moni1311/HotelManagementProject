
package com.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Hotelcustomer;
import com.demo.service.HotelService;


@RestController
public class HotelController 
{
@Autowired
private HotelService hotelservice;

@PostMapping("/update")
@CrossOrigin(origins="http://localhost:4200")
public Hotelcustomer updatecustomer(@RequestBody Hotelcustomer h1)
{
return hotelservice.updateService(h1);
}

@PostMapping("/insert")
@CrossOrigin(origins="http://localhost:4200")
public Hotelcustomer insertcustomer(@RequestBody Hotelcustomer h2)
{
return hotelservice.insertService(h2);
}

@PostMapping("/delete")
@CrossOrigin(origins="http://localhost:4200")
public void deletecustomer(@RequestBody Hotelcustomer h3)
{
 hotelservice.deleteService(h3);
}

@GetMapping("/fetch")
@CrossOrigin(origins="http://localhost:4200")
public List<Hotelcustomer> fetchcustomer()
{
	return hotelservice.fetchService();
}
}