import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  flag:boolean = true;

  title = 'FlightManagementSystem';

  changeFlag()
{
  if(this.flag)
    this.flag=false;
}
changeFlagAgain()
{
  if(this.flag==false)
    this.flag=true;
}

}


