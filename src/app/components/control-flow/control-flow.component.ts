import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visiable: boolean =  true;
  isDiv2RedVisiable: boolean =  true;
  dayName: string =  '';

  hideshowDiv1(isShow: boolean) {
    this.isDiv1Visiable = isShow; 
  }

  toggleDiv2() {
    // if(this.isDiv2RedVisiable == true) {
    //   this.isDiv2RedVisiable = false;
    // } else {
    //   this.isDiv2RedVisiable = true;
    // }
    this.isDiv2RedVisiable = !this.isDiv2RedVisiable;
    //this.isDiv2RedVisiable =  this.isDiv2RedVisiable == true ? false: true;
  }


}
