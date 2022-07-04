import { Component, Inject, OnInit } from '@angular/core';
import { flightdetails } from 'src/app/entity/flightdetails'; 
import { flightService } from 'src/app/flight.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-flightregister',
  templateUrl: './flightregister.component.html',
  styleUrls: ['./flightregister.component.css']
})
export class FlightregisterComponent implements OnInit {


  flightObj: flightdetails=new flightdetails();
  flightObjList :flightdetails[]=[]
  constructor(public flightService : flightService,@Inject(MAT_DIALOG_DATA) public editData:any,
  private dialogRef:MatDialogRef<FlightregisterComponent>) { }

  onSubmit(){
    if(!this.editData){
    const observable=this.flightService.registerFlight(this.flightObj)
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        this.dialogRef.close('save')
        alert("flight added successfully");
        
      }
    )
    console.log(this.flightObj)
    const promise = this.flightService.getAllFlights();
    promise.subscribe((response) => {
      console.log(response);
      this.flightObjList = response as flightdetails[];
    });
  }else{
    this.updateFlight()
  }
  }
  updateFlight(){
    this.flightService.updateFlight(this.flightObj,this.editData.fId)
    .subscribe({
      next:(res)=>{
        alert("Flight Updated Successfully");
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("error while updating the record!!");
      }
    })
  }
  ngOnInit(): void {
   
    const promise = this.flightService.getAllFlights();
    promise.subscribe((response) => {
      console.log(response);
      this.flightObjList = response as flightdetails[];
    });
    console.log(this.editData);
    if(this.editData){
      this.flightObj.airlineName=this.editData.airlineName;
      this.flightObj.flightNumber=this.editData.flightNumber;
      this.flightObj.origin=this.editData.origin;
      this.flightObj.destination=this.editData.destination;
      this.flightObj.startDate=this.editData.startDate;
      this.flightObj.endDate=this.editData.endDate;
      this.flightObj.businessClass=this.editData.businessClass;
      this.flightObj.economyClass=this.editData.economyClass;
      this.flightObj.cost=this.editData.cost;
      this.flightObj.block=this.editData.block;
      this.flightObj.meal=this.editData.meal;
    }
  }

  

  
  

}
