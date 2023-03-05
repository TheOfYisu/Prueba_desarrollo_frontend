import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DriversService} from "../../../../../../core/services/drivers.service";
import Swal from 'sweetalert2';
import {DriversFormComponent} from "../drivers-form/drivers-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-drivers-main',
  templateUrl: './drivers-main.component.html',
  styleUrls: ['./drivers-main.component.scss']
})
export class DriversMainComponent implements OnInit {
  datadriver = {}

  constructor(
    private router: Router,
    private DriversService: DriversService,
    public dialog: MatDialog
  ) {
  }

  formadddriver() {
    this.openDialog()
    this.DriversService.chargevar(false)
  }

  formeditdriver() {
    this.getdriver()
    if (this.datadriver != undefined) {
      this.openDialog()
      this.DriversService.chargevar(true)
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
    this.DriversService.driver$.subscribe(data => {
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
          this.DriversService.deletedriver(this.datadriver)
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
    const dialogRef = this.dialog.open(DriversFormComponent);
    'modal-xl'
    dialogRef.afterClosed();
  }
}
