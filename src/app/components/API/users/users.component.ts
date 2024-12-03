import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

userList: any [] = [];
carList: any [] = [];

public firstName: string = "Chetan";



constructor(private http: HttpClient) {
  debugger;
  this.getUsers();
  this.getCarList();
}

getUsers() {
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response:any) => {
    debugger;
    this.userList = response;
  }) 
}

getCarList() {
  this.http.get("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe((response:any)=>{
    debugger;
    this.carList = response.data;
  })
}

}
