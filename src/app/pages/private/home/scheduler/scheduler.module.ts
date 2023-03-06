import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerMainComponent } from './component/scheduler-main/scheduler-main.component';


@NgModule({
  declarations: [
    SchedulerMainComponent
  ],
  imports: [
    CommonModule,
    SchedulerRoutingModule
  ]
})
export class SchedulerModule { }
