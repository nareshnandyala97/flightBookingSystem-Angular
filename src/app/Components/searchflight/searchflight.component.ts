import { Component,Inject, OnInit } from '@angular/core';
import { flightdetails } from 'src/app/entity/flightdetails'; 
import { flightService } from 'src/app/flight.service';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  flightObj: flightdetails=new flightdetails();
  flightObjList :flightdetails[]=[];
  

   origin:string =""
   destination:string =""
   startDate:any

  sms:string=""

  Id:number=1;
  constructor(public router:ActivatedRoute,public flightService : flightService) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.queryparam);
    // this.Id=this.router.snapshot.queryParams;

  }

  onSubmit(){
    this.sms=" flights result"
  }

  onSearch(){
    this.sms=" flights result"
    this.searchResult(this.origin,this.destination,this.startDate);
  }

  // const promise = this.orderService.getOrders();
  //   promise.subscribe((response) => {
  //     console.log(response);
  //     this.orders = response as Order[];
  //   });
  searchResult(origin:String,destination:String,startDate:Date):void{
    this.flightService.searchFlight(origin,destination,startDate).subscribe(data=>{
     console.log(data)
     this.flightObjList=data as flightdetails[];
   },
   error=>{
     this.sms="No Records Found"
       
   })
     }
}
