import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

userData:any={};
  userRegister(data:NgForm)
  {
    console.warn(data)
    this.userData=data;
  }



}
