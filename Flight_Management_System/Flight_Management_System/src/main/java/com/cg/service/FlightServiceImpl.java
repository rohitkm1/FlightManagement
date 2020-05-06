package com.cg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.cg.dao.FlightDao;
import com.cg.entity.Flight;
import com.cg.error.UserCreatedException;

@Service
public class FlightServiceImpl implements FlightService {
	
	@Autowired
	FlightDao flightDao;
	

	@Override
	public void addFlight(Flight f) throws UserCreatedException{
		
		try
		{
			flightDao.addFlight(f);
		}
		catch(DataIntegrityViolationException e)
		{
			throw new UserCreatedException("Flight no already Exists");
		}

	}

	@Override
	public List viewFlight() {

		return flightDao.viewFlight();
	}

	@Override
	public void deleteFlight(int flightNumber) {
		

		Flight fli=flightDao.viewFlight(flightNumber);
		if(fli!=null)
		flightDao.deleteFlight(flightNumber);
		else
			throw new RuntimeException("Flight Number not found");
	}

	@Override
	public void modifyFlight(Flight flight) {

		flightDao.modifyFlight(flight);
		
	}

	@Override
	public Flight viewFlight(int flightNumber) throws UserCreatedException{
		

		Flight flight=flightDao.viewFlight(flightNumber);
		if(flight!=null)
		{
			return flight;
		}
		else
			throw new UserCreatedException("Flight number not found");
		
	}

}
