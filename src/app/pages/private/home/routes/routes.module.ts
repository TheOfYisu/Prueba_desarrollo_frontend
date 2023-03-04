import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesMainComponent } from './component/routes-main/routes-main.component';


@NgModule({
  declarations: [
    RoutesMainComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
