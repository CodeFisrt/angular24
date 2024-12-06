import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = "https://freeapi.gerasim.in/api/CarRentalApp/";
  

  constructor(private http: HttpClient) { }


  getAllCars() {
    debugger;
   return this.http.get(this.apiUrl +"GetCars");
  }

  addNewCar(obj:any) {
    debugger;
    return this.http.post(`${this.apiUrl}CreateNewCar`,obj)
  }

  onDeleteCar(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteCarbyCarId?carid=${id}`)
  }

  getAdditonOfTwoNo(num1: any, num2: any) {
    debugger;
    const addtion = parseInt(num1) + Number(num2);
    return addtion;
  }

}
