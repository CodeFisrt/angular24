import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  };

  apiLoginObj: Login =  new Login()

  constructor(private router: Router,private http: HttpClient){

  }


  onLogin() {
    // if(this.loginObj.userName == "admin" && this.loginObj.password == "1122") {
    //   debugger;
    //   this.router.navigateByUrl("admin")
    // } else {
    //   alert("Wrong Credentilas")
    // }
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.apiLoginObj).subscribe((res:any)=>{
      debugger;
      this.router.navigateByUrl("admin")
    },error=>{
      debugger;
      alert("Wrong Credentilas")
    })
  }
}

export class Login {
  EmailId: string;
  Password: string;
  constructor() {
      this.EmailId ="";
      this.Password ="";
  }
}
