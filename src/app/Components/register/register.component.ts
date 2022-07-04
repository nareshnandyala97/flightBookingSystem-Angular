import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flightService } from 'src/app/flight.service';
import { userRegister } from 'src/app/entity/userRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router,public flightService:flightService) { }

  userRegister:userRegister=new userRegister();
  adminRegister(){
    const observable=this.flightService.adminRegister(this.userRegister);
   observable.subscribe(
     (response:any)=>{
       console.log(response);
       alert("admin registered successfully");
       this.router.navigate(['/admin/login']);
     }
   )
  }
  ngOnInit(): void {
  }

}
