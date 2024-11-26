import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {


  firstName : string = "Chetan";
  rollNo: number = 123;
  isActive: boolean = true;
  currentDate: Date = new Date();

  lastName: string;

  student: any;
  
  employeeObj: any = {
    name:'Chhh',
    empId:233,
    city:'Pune',
    state:'MH'
  }

  cityList: string []  = ["Delhi","Nagpur","Mumbai",'Pune'];
  rollNoList : number [] = [111,112,113,114]

  constructor() {
    this.firstName = "Rahul";

    this.lastName = "Jogi";

    this.student = true;
    this.student = 123;
    this.student = "sadasd";
    this.student = {
      name:''
    }

    console.log(this.firstName)
  }





}
