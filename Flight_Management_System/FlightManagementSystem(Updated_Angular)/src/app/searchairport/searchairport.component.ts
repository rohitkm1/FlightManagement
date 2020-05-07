import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-searchairport',
  templateUrl: './searchairport.component.html',
  styleUrls: ['./searchairport.component.css']
})
export class SearchairportComponent implements OnInit {

  code:string;
  findAirport:Airport=new Airport();

  errormess:string="";


  constructor(private fmsserv:FmsserviceService) { }

  ngOnInit(): void {
  }

  searchOneAirport():void
  {
   
    this.fmsserv.searchOneAirport(this.code).subscribe(data=>{
      this.findAirport=data;
      this.errormess=undefined;
      alert("Flight found");
    },
    error=>
    {
      this.errormess="Airport Code not found";
      alert(this.errormess);
    }
    );
  }

}
