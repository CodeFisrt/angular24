import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  carList: any [] = [];
  newCarObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": 0,
    "color": "",
    "dailyRate": 0,
    "carImage": "",
    "regNo": ""
  }

  constructor(private http:HttpClient) {
    this.getCarList();
  }
 
  onSaveCar() {
    debugger;
    this.http.post("https://freeapi.gerasim.in/api/CarRentalApp/CreateNewCar",this.newCarObj).subscribe((res:any)=>{
      debugger;
      if(res.result == true) {
        alert("Car Created Success");
        this.getCarList();
      } else {
        alert(res.message)
      }
    })
  }

  getCarList() {
    this.http.get("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe((res:any)=>{
      this.carList = res.data;
    })
  }



}
