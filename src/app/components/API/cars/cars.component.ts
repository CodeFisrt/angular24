import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { CAR, ICAR } from '../../../Model/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  carList: CAR [] = [];

  newCarObj: CAR  = new CAR();

  isLoader: boolean = false;
  isApiCallInProgress: boolean = false;
  apiCommonUrl: string = "https://freeapi.gerasim.in/api/CarRentalApp/";

  constructor(private http:HttpClient, private carsrv:CarService) {
    this.getCarList();
    const apiUrl =  this.carsrv.apiUrl;
    debugger;
    const value = this.newCarObj;
    
  }
 
  onSaveCar() {
    debugger;
    // this.http.post(this.apiCommonUrl+"CreateNewCar",this.newCarObj).subscribe((res:any)=>{
    //   debugger;
    //   if(res.result == true) {
    //     alert("Car Created Success");
    //     this.getCarList();
    //   } else {
    //     alert(res.message)
    //   }
    // })
    if(this.isApiCallInProgress == false) {
      this.isApiCallInProgress = true;
      this.carsrv.addNewCar(this.newCarObj).subscribe((res:any)=>{
          debugger;
          if(res.result == true) {
            alert("Car Created Success");
            this.getCarList();
            this.newCarObj =  new CAR();
          } else {
            alert(res.message)
          }
          this.isApiCallInProgress = false;
        })
    }
  
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
      this.carsrv.onDeleteCar(carId).subscribe((res:any)=>{
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
    // this.http.get("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe((res:any)=>{
    //   this.carList = res.data;
    // })
    debugger;
    this.isLoader = true;
    this.carsrv.getAllCars().subscribe((res:any)=>{
      debugger;
      this.carList = res.data;
      this.isLoader = false;
    })
  }

  onEdit(carData: any) {
    this.newCarObj =  carData;
  }



}
