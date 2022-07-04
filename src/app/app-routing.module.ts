import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddflightComponent } from './Components/addflight/addflight.component';
import { FlightregisterComponent } from './Components/flightregister/flightregister.component';
import { LoginComponent } from './Components/login/login.component';
import { SearchflightComponent } from './Components/searchflight/searchflight.component';
import { ValidcomponenetComponent } from './Components/validcomponenet/validcomponenet.component';
import { FlightupdateComponent } from './Components/flightupdate/flightupdate.component';
import { FlightbookingComponent } from './Components/flightbooking/flightbooking.component';
import { SearchticketComponent } from './Components/searchticket/searchticket.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [{path:'about', component: AboutComponent},
{path:"valid",component:ValidcomponenetComponent},
{path:"addflight",component:AddflightComponent},
{path:"registerflight",component:FlightregisterComponent},
{path:"user/searchflight",component:SearchflightComponent},
{path:"admin/login",component:LoginComponent},
{path:"flightUpdate",component:FlightupdateComponent},
{path:"flightbooking",component:FlightbookingComponent},
{path:"searchticket",component:SearchticketComponent},
{path:"admin/register",component:RegisterComponent},
{path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
