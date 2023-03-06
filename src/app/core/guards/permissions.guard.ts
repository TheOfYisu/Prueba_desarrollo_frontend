import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(
    private LoginService:LoginService,
    private router:Router,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.hasUser()  ||  typeof localStorage !=='undefined'){
      console.log("true")
      return true
    }
    alert("You don't permissions")
    this.router.navigate(['/login'])
    return false;
  }

  hasUser():boolean{
    let  booleandata:boolean
    this.LoginService.loginvalid$.subscribe(data=>{
     booleandata=data
    })
    return booleandata
  }

}
