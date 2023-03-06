import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {InterfaceDrivers, InterfaceVehicles} from "../interface/interface-generales";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(
    private http: HttpClient
  ) {
    this.getlistvehicles();
  }

  private urlback = environment.urlback

  private listvehicles = new BehaviorSubject<InterfaceVehicles[]>([]);
  listvehicles$ = this.listvehicles.asObservable();

  private vehicle = new BehaviorSubject<InterfaceVehicles>(undefined as InterfaceVehicles);
  vehicle$ = this.vehicle.asObservable();

  private valitformAddorEdit = new BehaviorSubject(false);
  valitformAddorEdit$ = this.valitformAddorEdit.asObservable();

  getlistvehicles() {
    this.http.get<InterfaceVehicles[]>(`${this.urlback}/getvehicle`).subscribe(data=> {
      return this.listvehicles.next(data);
    })
  }

  getvehicle(vehicleget: InterfaceVehicles) {
    this.vehicle.next(vehicleget);
    console.log(this.vehicle);
  }

  addvehicle(datavehicle: InterfaceVehicles) {
    return this.http.post<InterfaceDrivers>(`${this.urlback}/addvehicle`,datavehicle).subscribe()
  }

  deletevehicle(idvehicle) {
    return this.http.delete<InterfaceDrivers>(`${this.urlback}/deletevehicle/${idvehicle["ID"]}`).subscribe()

  }

  updatevehicle(datavehicle: InterfaceVehicles,iddriver) {
    return this.http.put<InterfaceDrivers>(`${this.urlback}/updatevehicle/${iddriver}`,datavehicle).subscribe()
  }

  chargevar(i) {
    this.valitformAddorEdit.next(i)
  }
}
