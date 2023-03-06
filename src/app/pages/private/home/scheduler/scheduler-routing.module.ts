import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchedulerMainComponent} from "./component/scheduler-main/scheduler-main.component";

const routes: Routes = [
  {path: '', component: SchedulerMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule {
}
