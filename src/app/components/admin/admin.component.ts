import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  //number string any array boolean date object

  firstName: string = "Chetan";

  studentObject: any = {
    name:"Chetan",
    city:"Pune",
    state: "Mah",
    mobileNo:'9988998877'
  };

  showAlert() {
    alert("Welcome")
  }



}
