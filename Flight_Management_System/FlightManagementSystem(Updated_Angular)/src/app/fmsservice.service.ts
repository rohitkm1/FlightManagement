import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Airport } from './airport';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FmsserviceService {

  constructor(private http:HttpClient) { }


  viewAllAirport():Observable<any>
  {
    let url="http://localhost:1997/airport";
    return this.http.get(url);
  }

  createNewAirport(airport:Airport):Observable<any>
  {
    let url="http://localhost:1997/airport/new";
    return this.http.post(url,airport,{responseType:'text'});
  }

  createNewFlight(flight:Flight):Observable<any>
  {
    let url="http://localhost:1997/flight/new";
    return this.http.post(url,flight,{responseType:'text'});
  }
  viewAllFlight():Observable<any>
  {
    let url="http://localhost:1997/flight";
    return this.http.get(url);
  }
  searchOneFlight(fno:number):Observable<any>
  {
    let url="http://localhost:1997/flight/"+fno;
    return this.http.get(url);
  }
  searchOneAirport(code:string):Observable<any>
  {
    let url="http://localhost:1997/airport/"+code;
    return this.http.get(url);
  }
  deleteFlight(fno:number):Observable<any>
  {
    let url="http://localhost:1997/flight/delete/"+fno;
    return this.http.delete(url, {responseType:'text'});
  }
  updateOneFlight(flight:Flight):Observable<any>
  {
    let url="http://localhost:1997/flight/modify/";
    return this.http.put(url,flight,{responseType:'text'});
  }
}
