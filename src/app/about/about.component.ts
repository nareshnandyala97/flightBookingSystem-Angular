import { Component, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../Components/dialog/dialog.component';
import { FlightregisterComponent } from '../Components/flightregister/flightregister.component';

import { userDetails } from '../entity/userDetails';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
user:userDetails=new userDetails();
  openDialog(){
    this.dialog.open(FlightregisterComponent,{
     width:'180%'
    });

  }

  ngOnInit(): void {
  }

}
