import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-reactive',
  templateUrl: './car-reactive.component.html',
  styleUrl: './car-reactive.component.css'
})
export class CarReactiveComponent {
 
  carForm = new FormGroup({
    carId: new FormControl(0),
    brand: new FormControl(""),
    model: new FormControl(""),
    year: new FormControl(""),
    color: new FormControl(""),
    dailyRate: new FormControl(""),
    carImage: new FormControl(""),
    regNo: new FormControl("")
  })

  constructor(private http: HttpClient) {

  }
  onSaveCar() {
    debugger;
    const formValue =  this.carForm.value;
    this.http.post("https://freeapi.gerasim.in/api/CarRentalApp/CreateNewCar",formValue).subscribe((res:any)=>{
      debugger;
    })
  }
}
