import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesMainComponent} from "./component/routes-main/routes-main.component";
import {RoutesFormComponent} from "./component/routes-form/routes-form.component";

const routes: Routes = [
  {path:'',component:RoutesMainComponent},
  {path:'form',component:RoutesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
