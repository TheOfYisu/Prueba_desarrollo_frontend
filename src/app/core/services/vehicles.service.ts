import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {InterfaceVehicles} from "../interface/interface-generales";

const ELEMENT_DATA: InterfaceVehicles[] = [
  {
    ID:1,
    DESCRIPTION:"La descripción de cargos es la base para lograr coherencia entre las expectativas de un cargo y el desempeño de las personas que lo ocupen. Por lo tanto, es la base para implementar toda planeación en el área de gestión humana.",
    YEAR:2023,
    MAKE:15,
    CAPACITY:45,
    ACTIVE:true
  },
  {
    ID:1,
    DESCRIPTION:"holamundo",
    YEAR:2023,
    MAKE:15,
    CAPACITY:45,
    ACTIVE:true
  },
];

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private listvehicles = new BehaviorSubject<InterfaceVehicles[]>([]);
  listvehicles$ = this.listvehicles.asObservable();

  private vehicle = new BehaviorSubject<InterfaceVehicles>(undefined as InterfaceVehicles);
  vehicle$ = this.vehicle.asObservable();

  private valitformAddorEdit = new BehaviorSubject(false);
  valitformAddorEdit$ = this.valitformAddorEdit.asObservable();

  getlistvehicles() {
    return this.listvehicles.next(ELEMENT_DATA);
  }

  getvehicle(vehicleget: InterfaceVehicles) {
    this.vehicle.next(vehicleget);
    console.log(this.vehicle);
  }

  addvehicle(datavehicle: InterfaceVehicles) {
    console.log(datavehicle);
  }

  deletevehicle(id) {
    this.listvehicles.next([...this.listvehicles.value, id]);
  }

  updatevehicle(datavehicle: InterfaceVehicles) {
    console.log(datavehicle);
  }

  chargevar(i) {
    this.valitformAddorEdit.next(i)
  }

  constructor() {
    this.getlistvehicles();
  }
}
