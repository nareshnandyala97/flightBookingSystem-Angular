import { Component, OnInit } from '@angular/core';
import { userLogin } from 'src/app/entity/userLogin';
import { flightService } from 'src/app/flight.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:ActivatedRoute,public flightService : flightService,public routerr:Router) { }

  userLogin:userLogin=new userLogin();
  adminLogin(){
   const observable=this.flightService.adminLogin(this.userLogin);
   observable.subscribe(
     (response:any)=>{
       console.log(response);
       alert("admin logged in successfully");
       this.routerr.navigate(['/addflight']);
     },
     function(erro){
       alert("Incorrect User Name and password")
     }
   )
  }

  ngOnInit(): void {
  }

}
