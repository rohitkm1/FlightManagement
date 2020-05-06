package com.cg.service;

import java.util.List;

import com.cg.entity.Flight;

public interface FlightService {
	
	public void addFlight(Flight f);
	public List viewFlight();
	public void deleteFlight(int flightNumber);
	
	public void modifyFlight(Flight flight);
	public Flight viewFlight(int flightNumber);

}
