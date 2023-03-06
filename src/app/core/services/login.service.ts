import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlback=environment.urlback

  constructor(
    private http: HttpClient
  ) {
  }

  validatelogin(datalogin) {
    return this.http.post(`${this.urlback}/login`, datalogin)
  }

}
