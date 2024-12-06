import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

userList: any [] = [];
carList: any [] = [];

public firstName: string = "Chetan";



constructor(private http: HttpClient, private carSrv: CarService) {
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
  this.carSrv.getAllCars().subscribe((response:any)=>{
    debugger;
    this.carList = response.data;
  })
}

}
