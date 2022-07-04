import { Component, OnInit } from '@angular/core';
import { flightService } from 'src/app/flight.service';
import { flightdetails } from 'src/app/entity/flightdetails';

@Component({
  selector: 'app-searchticket',
  templateUrl: './searchticket.component.html',
  styleUrls: ['./searchticket.component.css']
})
export class SearchticketComponent implements OnInit {

  flightObj: flightdetails=new flightdetails();
  flightObjList :flightdetails[]=[];
  searchby:string="";
  searchbyPNR:string="";
  
  constructor(public flightService : flightService) { }

  ngOnInit(): void {
  }

  searchticketbyemail(){
    this.flightService.searchticket(this.searchby).subscribe(data=>{
      console.log(data)
      this.flightObjList=data as flightdetails[];
    },
    error=>{
      alert("error something went wrong");
        
    })
  }

  searchticketbyPNR(){
    this.flightService.searchticketbyPNR(this.searchbyPNR).subscribe(data=>{
      console.log(data)
      this.flightObjList=data as flightdetails[];
    },
    error=>{
      alert("error something went wrong");
        
    })
  }

  cancelTicket(flightObj:any){
    this.flightService.cancelFlight(flightObj.pnrNumber).subscribe(data=>{
      console.log(data)
      alert("Ticket cancelled successfully");
    },
    error=>{
      alert("error something went wrong");
        
    })

  }


}
