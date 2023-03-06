import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriversMainComponent} from "./component/drivers-main/drivers-main.component";
import {DriversFormComponent} from "./component/drivers-form/drivers-form.component";

const routes: Routes = [
  {path: '', component: DriversMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {
}
