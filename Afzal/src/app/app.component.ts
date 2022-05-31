import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userForm: FormGroup;
  listData: any;


  constructor(private fb: FormBuilder){

    this.listData =[];

    this.userForm = this.fb.group({
      firstName:[""],
      lastName:[""],
      city:[""],
      phoneNumber:[""]
    })
  }

  public addData() : void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset() {
    this.userForm.reset();
  }
  ngOnInit() {

  }
  
}
