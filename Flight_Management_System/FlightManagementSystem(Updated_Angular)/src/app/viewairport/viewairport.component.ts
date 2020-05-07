import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-viewairport',
  templateUrl: './viewairport.component.html',
  styleUrls: ['./viewairport.component.css']
})
export class ViewairportComponent implements OnInit {

  constructor(private fmsserv:FmsserviceService) { }

  airports:Airport[]=[];

  ngOnInit(): void {

    this.fmsserv.viewAllAirport().subscribe(data=>this.airports=data);
  }

}
