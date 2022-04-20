package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Hotelcustomer;

@Repository
public interface HotelInterface extends JpaRepository <Hotelcustomer,Integer>
{

}
