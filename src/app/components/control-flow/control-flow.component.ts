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

  cityList: string [] = ["Pune","Mumbai","Thane",'Nagpur',"Gondia"]

  studentList: any [] = [
    {studId:123, isActive: false, name:'AAA',city:'Pune',mobile:'111222222'},
    {studId:143, isActive: false, name:'BBB',city:'Mumbai',mobile:'22222222'},
    {studId:234, isActive: true, name:'CCCC',city:'Pune',mobile:'33333333'},
    {studId:345, isActive: false, name:'DDDD',city:'Jaipur',mobile:'4444444'},
    {studId:345, isActive: false, name:'EEEE',city:'Jaipur',mobile:'4444444'},
    {studId:345, isActive: true, name:'FFF',city:'Jaipur',mobile:'4444444'}
  ]
  hideshowDiv1(isShow: boolean) {
    this.isDiv1Visiable = isShow; 
     
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
      
    // }

    
     
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
