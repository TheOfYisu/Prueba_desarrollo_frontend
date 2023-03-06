import { Injectable } from '@angular/core';
import {BehaviorSubject, identity} from "rxjs";
import {InterfaceRoutes} from "../interface/interface-generales";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  constructor(
    private http: HttpClient
  ) {
    this.getlistvehicles();
    this.getListDriverVehicle();
  }
  private urlback = environment.urlback;
  private listroutes = new BehaviorSubject<InterfaceRoutes[]>([]);
  listroutes$ = this.listroutes.asObservable();

  private listrdriver = new BehaviorSubject<[]>([]);
  listrdriver$ = this.listrdriver.asObservable();

  private listrvehicle = new BehaviorSubject<[]>([]);
  listrvehicle$ = this.listrvehicle.asObservable();

  private valitformAddorEdit = new BehaviorSubject(true);
  valitformAddorEdit$ = this.valitformAddorEdit.asObservable();

  private allrouter = new BehaviorSubject<[]>([]);
  allrouter$ = this.allrouter.asObservable();

  getlistvehicles() {
    this.http.get<InterfaceRoutes[]>(`${this.urlback}/getroutes`).subscribe(data=> {
      return this.listroutes.next(data);
    })
  }
  chargevar(i) {
    this.valitformAddorEdit.next(i);
  }

  getListDriverVehicle(){
    this.http.get<[]>(`${this.urlback}/getifoformsrouter`).subscribe(data=> {
      this.listrdriver.next(data['listdriver'])
      this.listrvehicle.next(data['listvehicle'])
    })
  }

  addroute(dataroute: InterfaceRoutes) {
    return this.http.post<InterfaceRoutes>(`${this.urlback}/addroute`,dataroute).subscribe()
  }

  deleteroute(idroute) {
    return this.http.delete<InterfaceRoutes>(`${this.urlback}/deleteroute/${idroute}`).subscribe()
  }

  updateroute(datavehicle: InterfaceRoutes,idroute) {
    return this.http.put<InterfaceRoutes>(`${this.urlback}/updateroute/${idroute}`,datavehicle).subscribe()
  }

  getroute(idroute){
    this.http.get<[]>(`${this.urlback}/getroute/${idroute}`).subscribe(data=> {
      return this.allrouter.next(data)
    })
  }
}
