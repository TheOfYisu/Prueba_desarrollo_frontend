import {Injectable} from '@angular/core';
import {InterfaceDrivers} from "../interface/interface-generales";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  constructor(
    private http: HttpClient
  ) {
    this.getlistdrivers();
  }

  private urlback=environment.urlback

  private listdrivers = new BehaviorSubject<InterfaceDrivers[]>([]);
  listdrivers$ = this.listdrivers.asObservable();

  private driver = new BehaviorSubject<InterfaceDrivers>(undefined as InterfaceDrivers);
  driver$ = this.driver.asObservable();

  private valitformAddorEdit = new BehaviorSubject(false);
  valitformAddorEdit$ = this.valitformAddorEdit.asObservable();

  getlistdrivers() {
    this.http.get<InterfaceDrivers[]>(`${this.urlback}/getdrivers`).subscribe(data=>{
      return this.listdrivers.next(data);
    })
  }

  getdriver(driverget: InterfaceDrivers) {
    this.driver.next(driverget);
  }

  adddriver(datadriver: InterfaceDrivers) {
    return this.http.post<InterfaceDrivers>(`${this.urlback}/adddrivers`,datadriver).subscribe()
  }

  deletedriver(iddriver){
    return this.http.delete<InterfaceDrivers>(`${this.urlback}/deletedriver/${iddriver["ID"]}`).subscribe()
  }

  updatedriver(datadriver:InterfaceDrivers,iddriver){
    return this.http.put<InterfaceDrivers>(`${this.urlback}/updatedriver/${iddriver}`,datadriver).subscribe()
  }

  chargevar(i){
    this.valitformAddorEdit.next(i)
  }
}
