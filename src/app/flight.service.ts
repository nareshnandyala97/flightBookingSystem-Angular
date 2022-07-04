import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flightdetails } from './entity/flightdetails';
import { Observable } from 'rxjs';
import { bookingInfo } from './entity/bookingInfo';
import { userLogin } from './entity/userLogin';
import { userRegister } from './entity/userRegister';

const BASE_URL = 'http://localhost:9092/flight/getAllFlights';

@Injectable({
  providedIn: 'root',
})
export class flightService {
 
  getAllFlights() {
    return this.http.get(BASE_URL);
  }

  createUser(user: { name: string; age: number; Gender: string }) {
    return this.http.post(BASE_URL, user);
  }

  deleteUser(user:any) {
    return this.http.delete(BASE_URL ,user.id);
  }

  searchFlight(origin:String,destination:String,startDate:any){
    return this.http.get("http://localhost:9004/flight/search/?origin="+origin+"&destination="+destination+"&startDate="+startDate);
  }

  registerFlight(flightDetails:flightdetails):Observable<Object>{
    return this.http.post('http://localhost:9092/flight/airline/register',flightDetails);
  }

  updateFlight(flightDetails:flightdetails,id:number):Observable<Object>{
    return this.http.put("http://localhost:9092/flight/update/"+id,flightDetails);
  }

  deleteFlight(id:number){
    return this.http.delete("http://localhost:9092/flight/delete/"+id);
  }

  bookFlight(bookingInfo:bookingInfo):Observable<Object>{
    return this.http.post("http://localhost:9004/flight/booking",bookingInfo);
  }

  searchticket(searchby:string){
    return this.http.get("http://localhost:9004/flight/booking/history/"+searchby);
  }

  searchticketbyPNR(searchby:string){
    return this.http.get("http://localhost:9004/flight/ticket/"+searchby);
  }
  cancelFlight(pnr:String){
    return this.http.delete("http://localhost:9004/flight/booking/cancel/"+pnr);
  }

  adminLogin(user:userLogin){
    return this.http.post("http://localhost:9092/admin/login",user);
  }

  adminRegister(user:userRegister){
    return this.http.post("http://localhost:9092/admin/register",user);
  }

  findById(flightId:String){
    return this.http.get("http://localhost:9092/flight/"+flightId);
  }
  constructor(public http: HttpClient) {}
}
