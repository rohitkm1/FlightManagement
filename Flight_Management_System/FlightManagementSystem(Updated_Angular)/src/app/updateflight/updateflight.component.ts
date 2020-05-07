import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  constructor(private fmsserv:FmsserviceService) { }

  fno:number;
  updatedflight:Flight=new Flight();

  errormess:string="";


  ngOnInit(): void {
  }

  searchOneFlight():void
  {
    this.fmsserv.searchOneFlight(this.fno).subscribe(data=>
      {
      this.updatedflight=data;
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

  updateOneFlight():void
  {

    this.fmsserv.updateOneFlight(this.updatedflight).subscribe(data=>
      {
        alert("Flight Updated");
      },
      error=>
      {
        alert("There is some error");
      }

      );
  }

}
