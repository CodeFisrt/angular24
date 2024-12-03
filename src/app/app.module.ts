import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { HeaderComponent } from './components/header/header.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

import { provideHttpClient } from '@angular/common/http';
import { UsersComponent } from './components/API/users/users.component';
import { CarsComponent } from './components/API/cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    VariablesComponent,
    DataBindingComponent,
    NgifComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
    HeaderComponent,
    ControlFlowComponent,
    UsersComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
