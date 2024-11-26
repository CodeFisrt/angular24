import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  div1BgColor: string = "blue";
  isChecked: boolean = false;

  width: string = '';
  height: string ='';
  backColor: string ='';
  radius: string ='';

  myCss: any = {
    'background-color':'blue',
    'font-size':'30px',
    'color':'yellow',
    'height':'300px'
  }

  addDiv1Color(color: string) {
    this.div1BgColor = color;
  }
  chnageColor() {
    this.myCss.color = "red";
    this.myCss.width = "100px"
  }
}
