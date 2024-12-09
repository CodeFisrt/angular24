import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  //number string any array boolean date object

  firstName: string = "Chetan";
  lastName: string = "chetan prakash jogi";

  currentDate: Date = new Date();

  studentObject: any = {
    name:"Chetan",
    city:"Pune",
    state: "Mah",
    mobileNo:'9988998877'
  };

  cityList: string [] =['Pune','Delhi','Nagpur','Solapur','Mumbai','chandrapur','thane']

  studentList: any []= [
    {
      name:"Chetan",
      city:"Pune",
      state: "Mah",
      mobileNo:'9988998877'
    },
    {
      name:"Chetan",
      city:"Pune",
      state: "Mah",
      mobileNo:'9988998877'
    },
    {
      name:"Chetan",
      city:"Pune",
      state: "Mah",
      mobileNo:'9988998877'
    }
  ]
  num1: number = 0;
  num2: number = 0;

  result: number = 0;

  constructor(private carsrv:CarService){

  }

  onAdd() {
    debugger;
   this.result =  this.carsrv.getAdditonOfTwoNo(this.num1, this.num2)
  }
  showAlert() {
    alert("Welcome")
  }



}
