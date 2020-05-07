import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  mess:string="";
  errormess:string="";
  flig:Flight=new Flight();

  constructor(private fmsserv:FmsserviceService) { }

  ngOnInit(): void {
  }

  createFlight()
  {
    this.fmsserv.createNewFlight(this.flig).subscribe(data=>
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
        // console.log("Error Occured !!!",error);
      }
      );
  }


}
