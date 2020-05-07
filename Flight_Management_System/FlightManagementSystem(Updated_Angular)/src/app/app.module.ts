import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddairportComponent } from './addairport/addairport.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewairportComponent } from './viewairport/viewairport.component';
import { SearchairportComponent } from './searchairport/searchairport.component';
import { AddflightComponent } from './addflight/addflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { FlightComponent } from './flight/flight.component';
import { AirportComponent } from './airport/airport.component';

@NgModule({
  declarations: [
    AppComponent,
    AddairportComponent,
    ViewairportComponent,
    SearchairportComponent,
    AddflightComponent,
    SearchflightComponent,
    ViewflightComponent,
    DeleteflightComponent,
    UpdateflightComponent,
    FlightComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
