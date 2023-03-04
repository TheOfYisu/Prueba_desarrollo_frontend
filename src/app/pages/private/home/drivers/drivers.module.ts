import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriversRoutingModule} from './drivers-routing.module';
import {DriversMainComponent} from './component/drivers-main/drivers-main.component';


@NgModule({
  declarations: [
    DriversMainComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule {
}
