import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehiclesMainComponent} from "./component/vehicles-main/vehicles-main.component";

const routes: Routes = [
  {path: '', component: VehiclesMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule {
}
