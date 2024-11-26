import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {

  isDiv1Visiable : boolean = false;
  isDiv3Visiable: boolean = false;

  num1: number = 0;
  num2: number = 0;

  toggleDiv3() {
    // if(this.isDiv3Visiable == true) {
    //   this.isDiv3Visiable = false;
    // } else {
    //   this.isDiv3Visiable = true;
    // }

    // this.isDiv3Visiable = !this.isDiv3Visiable;

    this.isDiv3Visiable =  this.isDiv3Visiable == true ? false: true;
  }

  onDiv1Hide() {  
    this.isDiv1Visiable = false;
  }
  

  onShowDiv1() {
    this.isDiv1Visiable = true;
  }

}
