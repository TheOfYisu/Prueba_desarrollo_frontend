import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../../core/services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router:Router,
    private LoginService:LoginService
  ) {
  }
  username=localStorage.getItem('username')
  cerrarsesion(){
    localStorage.clear()
    this.router.navigate(['/login'])
    this.LoginService.chamlogin(false)
  }
}
