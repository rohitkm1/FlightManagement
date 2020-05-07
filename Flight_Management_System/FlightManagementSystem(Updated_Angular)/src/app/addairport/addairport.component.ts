import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-addairport',
  templateUrl: './addairport.component.html',
  styleUrls: ['./addairport.component.css']
})
export class AddairportComponent implements OnInit {

  mess:string="";
  errormess:string="";
  airp:Airport=new Airport();

  constructor(private fmsserv:FmsserviceService) { }

  ngOnInit(): void {

  }


  createAirport()
  {

    this.fmsserv.createNewAirport(this.airp).subscribe(data=>
      {

        this.mess=data;
        this.errormess=undefined;
        alert(this.mess);
      },
      error=>
      {

        this.errormess=JSON.parse(error.error).message;
        this.mess=undefined;
        alert(this.errormess);
        //  console.log("Error Occured !!!",error);
      }
      );
  }

}
