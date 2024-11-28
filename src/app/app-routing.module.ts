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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
