import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-reactive',
  templateUrl: './car-reactive.component.html',
  styleUrl: './car-reactive.component.css'
})
export class CarReactiveComponent {
 
  carForm = new FormGroup({
    carId: new FormControl(0),
    brand: new FormControl("",[Validators.required,Validators.minLength(5)]),
    model: new FormControl(""),
    year: new FormControl("",[Validators.required,Validators.minLength(4),Validators.pattern('^[0-9]*$')]),
    color: new FormControl(""),
    dailyRate: new FormControl(""),
    carImage: new FormControl(""),
    regNo: new FormControl("")
  })

  carList: any[]= [];

  constructor(private http: HttpClient) {
    this.getCarList();
  }

  getCarList() {
    this.http.get("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe((res:any)=>{
      this.carList = res.data;
    })
    
  }

  onSaveCar() {
    debugger;
    const formValue =  this.carForm.value;
    this.http.post("https://freeapi.gerasim.in/api/CarRentalApp/CreateNewCar",formValue).subscribe((res:any)=>{
      debugger;
      this.getCarList();
      this.carForm.reset();
    })
  }

  onEdit(item: any) {
    debugger;
    this.carForm = new FormGroup({
      carId: new FormControl(item.carId),
      brand: new FormControl(item.brand,[Validators.required,Validators.minLength(5)]),
      model: new FormControl(item.model),
      year: new FormControl(item.year,[Validators.required,Validators.minLength(4),Validators.pattern('^[0-9]*$')]),
      color: new FormControl(item.color),
      dailyRate: new FormControl(item.dailyRate),
      carImage: new FormControl(item.carImage),
      regNo: new FormControl(item.regNo)
    })
  }
}
