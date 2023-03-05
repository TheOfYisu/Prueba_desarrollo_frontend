import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {InterfaceRoutes, InterfaceVehicles} from "../interface/interface-generales";

const ELEMENT_DATA: InterfaceRoutes[] = [
  {
    ID:1,
    DESCRIPTION:"La descripción de cargos es la base para lograr coherencia entre las expectativas de un cargo y el desempeño de las personas que lo ocupen. Por lo tanto, es la base para implementar toda planeación en el área de gestión humana.",
    DRIVER:"15",
    VEHICLE:"45",
    ACTIVE:true
  },
  {
    ID:4,
    DESCRIPTION:"La descripción de cargos es la base para lograr coherencia entre las expectativas de un cargo y el desempeño de las personas que lo ocupen. Por lo tanto, es la base para implementar toda planeación en el área de gestión humana.",
    DRIVER:"15",
    VEHICLE:"45",
    ACTIVE:true
  },
];
@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  private listroutes = new BehaviorSubject<InterfaceRoutes[]>([]);
  listroutes$ = this.listroutes.asObservable();

  private valitformAddorEdit = new BehaviorSubject(true);
  valitformAddorEdit$ = this.valitformAddorEdit.asObservable();

  getlistvehicles() {
    return this.listroutes.next(ELEMENT_DATA);
  }
  chargevar(i) {
    this.valitformAddorEdit.next(i)
  }

  addroute(datavehicle: InterfaceVehicles) {
    console.log(datavehicle);
  }

  deleteroute(id) {
    this.listroutes.next([...this.listroutes.value, id]);
  }

  updateroute(datavehicle: InterfaceVehicles) {
    console.log(datavehicle);
  }

  constructor() {
    this.getlistvehicles();
  }
}
