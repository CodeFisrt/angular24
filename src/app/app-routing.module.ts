import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { VariablesComponent } from './components/variables/variables.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { UsersComponent } from './components/API/users/users.component';
import { CarsComponent } from './components/API/cars/cars.component';
import { CarReactiveComponent } from './components/API/car-reactive/car-reactive.component';

const routes: Routes = [
  //default Route
  {
    path:'',
    redirectTo:"ng-class",
    pathMatch:'full'
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path:'ng-class',
    component:NgClassComponent
  },
  {
    path:'ngstyle',
    component: NgStyleComponent
  },
  {
    path:'ngfor',
    component: NgforComponent
  },
  {
    path:'ngif',
    component: NgifComponent
  },
  {
    path:'variable',
    component:VariablesComponent
  },
  {
    path:'control-flow',
    component:ControlFlowComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'cars',
    component:CarsComponent
  }
  ,
  {
    path:'car-reactive',
    component:CarReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
