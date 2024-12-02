import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

userList: any [] = [];



constructor(private http: HttpClient) {
  debugger;
  this.getUsers();
}

getUsers() {
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response:any) => {
    this.userList = response;
  }) 
}

}
