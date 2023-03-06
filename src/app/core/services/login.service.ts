import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginvalid  = new BehaviorSubject<boolean>(false);
  public loginvalid$ = this.loginvalid.asObservable()
  private urlback = environment.urlback

  constructor(
    private http: HttpClient
  ) {
  }

  validatelogin(datalogin) {
    return this.http.post(`${this.urlback}/login`, datalogin)
  }
  chamlogin(valid){
    this.loginvalid.next(valid)
  }

}
