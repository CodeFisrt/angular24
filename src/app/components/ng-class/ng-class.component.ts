import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  divBgColor: string = "bg-danger";
  isChecked: boolean =  true;
  div3ClasName: string = '';
  div4Class: string = 'circle';

  studentList: any []= [
    {name:'Chetan' ,city:'Pune', isActive: true},
    {name:'Rahul' ,city:'Mumabi', isActive: false},
    {name:'Ram' ,city:'Pune', isActive: false},
    {name:'Shyam' ,city:'Mumabi', isActive: true},
    {name:'Punam' ,city:'Thane', isActive: true}
  ]




  addDiv1BgColor(color: string) {
    this.divBgColor = color;
  }

  toggleDiv4() {
    debugger;
    // if(this.div4Class == "circle") {
    //   this.div4Class = "square";
    // } else {
    //   this.div4Class = "circle";
    // }

    this.div4Class = this.div4Class == "circle"? 'square':'circle';
  }

}
