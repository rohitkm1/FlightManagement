import { Component, OnInit } from '@angular/core';
import { FmsserviceService } from '../fmsservice.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {

  fno:number;

  errormess:string="";


  constructor(private fmsserv:FmsserviceService) { }

  ngOnInit(): void {}

  deleteFlight():void
  {
    this.fmsserv.deleteFlight(this.fno).subscribe(data=>
      {
        alert("Flight deleted");
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
