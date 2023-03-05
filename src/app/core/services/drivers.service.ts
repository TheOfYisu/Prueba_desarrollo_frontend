import { Injectable } from '@angular/core';
import {InterfaceDrivers} from "../interface/interface-generales";
import {BehaviorSubject} from "rxjs";
const ELEMENT_DATA: InterfaceDrivers[] = [
  {ID:1,LAST_NAME: "Garizao", FIRST_NAME: 'Jesus', SSD: "1044210456", DOB: '11-12-2003',ADDRESS:'jesudgm.11@gmial.com',CITY:"Barranquilla",ZIP:"",PHONE:"3044300928",ACTIVE:true},
  {ID:2,LAST_NAME: "Mejia", FIRST_NAME: 'Daniel', SSD: "1044210456", DOB: '11-12-2003',ADDRESS:'jesudgm.11@gmial.com',CITY:"Barranquilla",ZIP:"",PHONE:"3044300928",ACTIVE:false},
];

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private listdrivers=new BehaviorSubject<InterfaceDrivers[]>([]);
  listdrivers$=this.listdrivers.asObservable();

  private driver=new BehaviorSubject<InterfaceDrivers>(undefined as InterfaceDrivers);
  driver$=this.driver.asObservable();

  private valitformAddorEdit=new BehaviorSubject(false);
  valitformAddorEdit$=this.valitformAddorEdit.asObservable();

  getlistdrivers(){
    return this.listdrivers.next(ELEMENT_DATA);
  }

  getdriver(driverget:InterfaceDrivers){
    this.driver.next(driverget);
    console.log(this.driver);
  }

  adddriver(datadriver:InterfaceDrivers){
    console.log(datadriver);
  }

  deletedriver(id){
    this.listdrivers.next([...this.listdrivers.value,id]);
  }

  updatedriver(datadriver:InterfaceDrivers){
    console.log(datadriver);
  }

  chargevar(i){
    this.valitformAddorEdit.next(i)
  }
  constructor(
  ) {
    this.getlistdrivers();
  }
}
