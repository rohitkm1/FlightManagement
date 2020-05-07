import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddairportComponent } from './addairport/addairport.component';
import { ViewairportComponent } from './viewairport/viewairport.component';
import { AddflightComponent } from './addflight/addflight.component';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { SearchairportComponent } from './searchairport/searchairport.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AirportComponent } from './airport/airport.component';
import { FlightComponent } from './flight/flight.component';


const routes: Routes = [

  {path:'airport',component:AirportComponent},
  {path:'flight',component:FlightComponent},
  {path:'addairport',component:AddairportComponent},
  {path:'viewairport',component:ViewairportComponent},
  {path:'addflight',component:AddflightComponent},
  {path:'viewflight',component:ViewflightComponent},
  {path:'searchflight',component:SearchflightComponent},
  {path:'searchairport',component:SearchairportComponent},
  {path:'deleteflight',component:DeleteflightComponent},
  {path:'updateflight',component:UpdateflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingcomponent=[AddairportComponent, ViewairportComponent];
