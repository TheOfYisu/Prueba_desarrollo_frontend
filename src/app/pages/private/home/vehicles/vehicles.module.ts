import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VehiclesRoutingModule} from './vehicles-routing.module';
import {VehiclesMainComponent} from './component/vehicles-main/vehicles-main.component';


@NgModule({
  declarations: [
    VehiclesMainComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule {
}
