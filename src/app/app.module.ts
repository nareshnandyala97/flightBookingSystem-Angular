import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ValidcomponenetComponent } from './Components/validcomponenet/validcomponenet.component';
import { AddflightComponent } from './Components/addflight/addflight.component';
import { FlightregisterComponent } from './Components/flightregister/flightregister.component';
import { SearchflightComponent } from './Components/searchflight/searchflight.component';
import { LoginComponent } from './Components/login/login.component';
import { FlightupdateComponent } from './Components/flightupdate/flightupdate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FlightbookingComponent } from './Components/flightbooking/flightbooking.component';
import { SearchticketComponent } from './Components/searchticket/searchticket.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ValidcomponenetComponent,
    AddflightComponent,
    FlightregisterComponent,
    SearchflightComponent,
    LoginComponent,
    FlightupdateComponent,
    FlightbookingComponent,
    SearchticketComponent,
    RegisterComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
