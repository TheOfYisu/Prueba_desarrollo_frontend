import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path:'drivers',loadChildren:()=>import('./drivers/drivers.module').then(m=>m.DriversModule)},
      {path:'vehicles',loadChildren:()=>import('./vehicles/vehicles.module').then(m=>m.VehiclesModule)},
      {path:'routes',loadChildren:()=>import('./routes/routes.module').then(m=>m.RoutesModule)},
      {path:'scheduler',loadChildren:()=>import('./scheduler/scheduler.module').then(m=>m.SchedulerModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
