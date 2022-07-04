import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/entity/userDetails';
import { flightdetails } from 'src/app/entity/flightdetails';
import { bookingInfo } from 'src/app/entity/bookingInfo';
import { flightService } from 'src/app/flight.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flightbooking',
  templateUrl: './flightbooking.component.html',
  styleUrls: ['./flightbooking.component.css']
})
export class FlightbookingComponent implements OnInit {
  userDetails: userDetails=new userDetails();
  dataarray=[];
  flightObj: flightdetails=new flightdetails();
  bookingInfo:bookingInfo=new bookingInfo();
  constructor(public flightService : flightService,public router:ActivatedRoute) { }

  ngOnInit(): void {

    console.log(window.location.href);
    const filter = this.router.snapshot.queryParamMap.get('Id');
   console.log(filter)

    this.flightService.findById(filter)
    .subscribe(
      (response:any)=>{

        
        this.airlineName=response.airlineName;
        this.origin=response.origin;
        this.destination=response.destination;
        this.flightNumber=response.flightNumber;

        this.bookingInfo.airlineName=response.airlineName;
        this.bookingInfo.origin=response.origin;
        this.bookingInfo.destination=response.destination;
        this.bookingInfo.flightNumber=response.flightNumber;
        
      }
    )
    this.bookingInfo.airlineName=this.airlineName;
    this.bookingInfo.origin=this.origin;
    this.bookingInfo.destination=this.destination;
    this.bookingInfo.flightNumber=this.flightNumber;
    console.log(this.airlineName);
    console.log(this.bookingInfo);
  }

  addForm(){
    this.userDetails=new userDetails();
    this.dataarray.push(this.userDetails);



   

  }

  airlineName:string | undefined
  origin:string | undefined
  destination:string | undefined
  flightNumber:string | undefined
  Id:Number;
  onSubmit(){
   
   
   

    this.bookingInfo.userDetails=this.dataarray;
   
    console.log(this.bookingInfo)
    this.flightService.bookFlight(this.bookingInfo).subscribe({
      next:(res)=>{
        alert("Flight Booked Successfully")
      },
      error:()=>{
        alert("Error while booking the flight")
      }
    })
 
    
  }

  saveBooking(){}

//   (response:any)=>{
//     this.airlineName=response.airlineName;
//     this.origin=response.origin;
//     this.destination=response.destination;
//   }
// )
// this.bookingInfo.airlineName=this.airlineName;
// this.bookingInfo.origin=this.origin;
// this.bookingInfo.destination=this.destination;

  

  bookFlight(){
   
  }

}
