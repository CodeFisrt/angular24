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
  apiCommonUrl: string = "https://freeapi.gerasim.in/api/CarRentalApp/";

  constructor(private http:HttpClient) {
    this.getCarList();
  }
 
  onSaveCar() {
    debugger;
    this.http.post(this.apiCommonUrl+"CreateNewCar",this.newCarObj).subscribe((res:any)=>{
      debugger;
      if(res.result == true) {
        alert("Car Created Success");
        this.getCarList();
      } else {
        alert(res.message)
      }
    })
  }
  onUpdateCar() { 
    this.http.put(this.apiCommonUrl + "UpdateCar",this.newCarObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Car Updated Success");
        this.getCarList();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(carId: number) {
    debugger;
    const isDelete = confirm("Are you Sure Want to Delete ??");
    if(isDelete == true) {
      this.http.delete(this.apiCommonUrl + "DeleteCarbyCarId?carid=" + carId).subscribe((res:any)=>{
        if(res.result) {
          alert("Car Deleted Success");
          this.getCarList();
        } else {
          alert(res.message)
        }
      })
    }
   
  }

  getCarList() {
    this.http.get(this.apiCommonUrl+"GetCars").subscribe((res:any)=>{
      this.carList = res.data;
    })
  }

  onEdit(carData: any) {
    this.newCarObj =  carData;
  }



}
