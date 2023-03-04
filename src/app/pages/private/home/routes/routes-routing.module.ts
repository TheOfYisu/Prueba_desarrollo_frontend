import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesMainComponent} from "./component/routes-main/routes-main.component";

const routes: Routes = [
  {path:'',component:RoutesMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
