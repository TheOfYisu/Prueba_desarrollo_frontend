import {Component, OnInit} from '@angular/core';
import {Drivers_enum} from "../../../../../../core/enums/drivers";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {DriversService} from "../../../../../../core/services/drivers.service";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-drivers-grid',
  templateUrl: './drivers-grid.component.html',
  styleUrls: ['./drivers-grid.component.scss']
})
export class DriversGridComponent implements OnInit {
  public driver
  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'LAST NAME', 'FIRST NAME', 'SSD', 'DOB', 'ADDRESS', 'CITY', 'ZIP', 'PHONE', 'ACTIVE'];

  constructor(
    private DriversService: DriversService
  ) {
    this.getlistdrivers()
  }

  getdrivers(event: MatCheckboxChange, driver): void {
    const isChecked: boolean = event.checked;
    if (isChecked == true) {
      this.DriversService.getdriver(driver)
    } else {
      this.DriversService.getdriver(driver.delete)
    }
  }

  getlistdrivers() {
    this.DriversService.listdrivers$.subscribe((data) => {
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
