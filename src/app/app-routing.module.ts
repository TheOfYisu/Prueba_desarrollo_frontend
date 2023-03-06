import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PermissionsGuard} from "./core/guards/permissions.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)},
  {path:'user',loadChildren:()=>import('./pages/private/private.module').then(m=>m.PrivateModule),canActivate:[PermissionsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
