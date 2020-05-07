import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor(private fmsserv:FmsserviceService) { }

  flights:Flight[]=[];

  ngOnInit(): void {

    this.fmsserv.viewAllFlight().subscribe(data=>this.flights=data);
  }

}
