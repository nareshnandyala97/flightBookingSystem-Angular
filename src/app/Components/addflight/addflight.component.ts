import { Component, OnInit } from '@angular/core';
import { flightdetails } from 'src/app/entity/flightdetails'; 
import { flightService } from 'src/app/flight.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightregisterComponent } from '../flightregister/flightregister.component';



@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  // flightList :flightdetails [];

  // constructor() { 
  //   this.flightList=[];
  // }
  flightObj: flightdetails=new flightdetails();
  flightObjList :flightdetails[]=[]
  constructor(public flightService : flightService,private dialog:MatDialog) { }
  ngOnInit(): void {
    const promise = this.flightService.getAllFlights();
    promise.subscribe((response) => {
      console.log(response);
      this.flightObjList = response as flightdetails[];
    });
  }

  editFlight(flight:any){
    this.dialog.open(FlightregisterComponent,{
      data:flight,width:'180%'
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllFlights();
      }
    });
    
  }

  openDialog(){
    this.dialog.open(FlightregisterComponent,{
     width:'180%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllFlights();
      }
    });
  }

  getAllFlights(){
    const promise = this.flightService.getAllFlights();
    promise.subscribe((response) => {
      console.log(response);      
      this.flightObjList = response as flightdetails[];
    });
    
  }

  deleteFlight(flight:any){
    this.flightService.deleteFlight(flight.fId)
    .subscribe({
      next:(res)=>{
        alert("Flight Deleted Successfully")
        this.getAllFlights();
      },
      error:()=>{
        alert("Error while deleting the flight")
      }
    })
  }

}
