import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  fno:number;
  findFlight:Flight=new Flight();

  errormess:string="";

  constructor(private fmsserv:FmsserviceService) { }

  ngOnInit(): void {
  }
  searchOneFlight():void
  {
    this.fmsserv.searchOneFlight(this.fno).subscribe(data=>
      {
      this.findFlight=data;
      alert("Flight found");

      this.errormess=undefined;
      },
      error=>
      {
        this.errormess="Flight Number not found";
        alert(this.errormess);
      }
      );
  } 
}
