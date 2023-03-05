import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {VehiclesService} from "../../../../../../core/services/vehicles.service";

@Component({
  selector: 'app-vehicles-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss']
})
export class VehiclesGridComponent {
  public driver
  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'DESCRIPTION', 'YEAR', 'MAKE','CAPACITY','ACTIVE'];

  constructor(
    private VehiclesService: VehiclesService
  ) {
    this.getlistdrivers()
  }

  getdrivers(event: MatCheckboxChange, vehicle): void {
    const isChecked: boolean = event.checked;
    if (isChecked == true) {
      this.VehiclesService.getvehicle(vehicle)
    } else {
      this.VehiclesService.getvehicle(vehicle.delete)
    }
  }

  getlistdrivers() {
    this.VehiclesService.listvehicles$.subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error => {
        console.log(error)
      }))
  }

  ngOnInit(): void {
    this.getlistdrivers()
  }

}
