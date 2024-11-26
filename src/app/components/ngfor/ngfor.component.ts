import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

  cityList: string [] = ["Pune","Nagpur","Jaipur","Mumbai"];
  rollNoList: number [] = [111,112,13,114,115,116];

  studentList: any [] = [
    {studId:123, name:'AAA',city:'Pune',mobile:'111222222'},
    {studId:143, name:'BBB',city:'Mumbai',mobile:'22222222'},
    {studId:234, name:'CCCC',city:'Pune',mobile:'33333333'},
    {studId:345, name:'DDDD',city:'Jaipur',mobile:'4444444'},
    {studId:345, name:'DDDD',city:'Jaipur',mobile:'4444444'},
    {studId:345, name:'DDDD',city:'Jaipur',mobile:'4444444'}
  ]

  firstNAme: string = "Chetan";

 
 
}
