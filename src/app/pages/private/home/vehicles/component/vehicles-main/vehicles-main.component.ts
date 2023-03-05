import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {VehiclesService} from "../../../../../../core/services/vehicles.service";
import {VehiclesFormComponent} from "../vehicles-form/vehicles-form.component";

@Component({
  selector: 'app-vehicles-main',
  templateUrl: './vehicles-main.component.html',
  styleUrls: ['./vehicles-main.component.scss']
})
export class VehiclesMainComponent {
  datadriver = {}

  constructor(
    private router: Router,
    private VehiclesService: VehiclesService,
    public dialog: MatDialog
  ) {
  }

  formadddriver() {
    this.openDialog()
    this.VehiclesService.chargevar(false)
  }

  formeditdriver() {
    this.getdriver()
    if (this.datadriver != undefined) {
      this.openDialog()
      this.VehiclesService.chargevar(true)
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        text: 'You must select a driver.',
        confirmButtonColor: '#3085d6',
        toast: true
      })
    }
  }

  getdriver() {
    this.VehiclesService.vehicle$.subscribe(data => {
      this.datadriver = data
      console.log(this.datadriver)
    })
  }

  deletedriver() {
    this.getdriver()
    if (this.datadriver != undefined) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        toast: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.VehiclesService.deletevehicle(this.datadriver)
          //.subscribe()
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }
          })
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        text: 'You must select a driver.',
        confirmButtonColor: '#3085d6',
        toast: true
      })
    }
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VehiclesFormComponent);
    'modal-xl'
    dialogRef.afterClosed();
  }
}
