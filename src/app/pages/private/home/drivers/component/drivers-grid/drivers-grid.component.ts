import {Component, OnInit} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {DriversService} from "../../../../../../core/services/drivers.service";
import {MatTableDataSource} from '@angular/material/table';
import {Active_enum} from "../../../../../../core/enums/general-enums";

@Component({
  selector: 'app-drivers-grid',
  templateUrl: './drivers-grid.component.html',
  styleUrls: ['./drivers-grid.component.scss']
})
export class DriversGridComponent implements OnInit {
  public dataSource !: MatTableDataSource<any>;
  public displayedColumns: string[] = ['ID', 'LAST NAME', 'FIRST NAME', 'SSD', 'DOB', 'ADDRESS', 'CITY', 'ZIP', 'PHONE', 'ACTIVE'];

  public Active_enum = Active_enum

  constructor(
    private DriversService: DriversService
  ) {
    this.getlistdrivers()
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + (date.getDate() + 1)).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
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
        for (let index in data) {
          data[index].DOB = this.convert(data[index].DOB)
        }
        this.dataSource = new MatTableDataSource(data);
      },
      (error => {
        console.log(error)
      }))
  }

  ngOnInit(): void {
    this.getlistdrivers()
    console.log(this.Active_enum)
  }

}
