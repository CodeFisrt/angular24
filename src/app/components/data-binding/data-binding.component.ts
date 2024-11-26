import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Chetan";
  ///variable || property ||data ||state

  lastName:string  ="Jogi";
  middleName: string = "sadasdasd"
  inputType: string = "button";
  paraClassName: string = "text-danger"
  minLength: number =  5;
  selectedCountry: string = 'USA';

  showAlert () {
    alert("Welcome Batch 24")
  }
  showMessage(messsgae: string) {
    alert(messsgae)
  }
  onCountryChange() {
    alert("Country Chnaged")
  }

  onMouseEnter() {
    console.log("MOusee Entered")
  }

  onMouseLeft() {
    console.log("MOusee Left")
  }

 
}
