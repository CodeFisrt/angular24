import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  //number string any array boolean date object

  firstName: string = "Chetan";

  showAlert() {
    alert("Welcome")
  }



}
