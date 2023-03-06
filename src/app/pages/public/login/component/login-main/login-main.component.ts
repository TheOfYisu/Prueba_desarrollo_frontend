import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../../../core/services/login.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent {
  logo = 'https://cdn-icons-png.flaticon.com/512/1535/1535791.png'
  formlogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private LoginService: LoginService,
    private router:Router,
  ) {
  }
  createformlogin() {
    this.formlogin = this.fb.group({
      user:[null, Validators.required],
      password:[null, Validators.required]
    })
  }

  sendform(){
    if (this.formlogin.valid==true){
      this.LoginService.validatelogin(this.formlogin.value).subscribe(data=>{
        const valid=Boolean(data["token"])
        if (valid===false){
          Swal.fire({
            icon: 'error',
            title: 'Oops...!',
            text: 'Credential Incorrect.',
            confirmButtonColor: '#3085d6',
            toast: true
          })
        }else{
          this.router.navigate(['/user'])
        }
      })
    }
  }
  get FormLoginValidator(): boolean{
    return this.formlogin.valid;
  }

  ngOnInit(): void {
    this.createformlogin()
  }

}
