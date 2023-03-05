import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {VehiclesService} from "../../../../../../core/services/vehicles.service";

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.scss']
})
export class VehiclesFormComponent implements OnInit {
  formvehicle: FormGroup;
  statusactive = [{value: 'True'}, {value: 'False'}];
  titleformvehicle = "Formulario Vehicle";
  private datadriver = {};
  validformaddoredit: boolean;

  constructor(
    private fb: FormBuilder,
    private VehiclesService: VehiclesService
  ) {
    this.createformvehicle();
  }

  createformvehicle() {
    this.formvehicle = this.fb.group({
      DESCRIPTION: [null, Validators.required],
      YEAR: [null, Validators.required],
      MAKE: [null, Validators.required],
      CAPACITY: [null, Validators.required],
      ACTIVE: [null, Validators.required]
    })
  }

  getFormVehicleValidator(): boolean {
    return this.formvehicle.valid;
  }

  getvehicle() {
    this.VehiclesService.vehicle$.subscribe(data => {
      this.datadriver = data
    })
  }

  sendformvehicle() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save it!',
      toast: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.validformaddoredit == true) {
          this.VehiclesService.updatevehicle(this.formvehicle.value)
        } else {
          this.VehiclesService.addvehicle(this.formvehicle.value)
        }
        this.validformaddoredit == true
        Swal.fire({
          title: 'Save!',
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
  }

  buttoneditform() {
    this.formvehicle.enable()
  }

  getAddorEdit() {
    this.VehiclesService.valitformAddorEdit$.subscribe(data => {
      this.validformaddoredit = data;
    })
  }

  ngOnInit(): void {
    this.getAddorEdit()
    if (this.validformaddoredit == true) {
      this.getvehicle()
      this.formvehicle.patchValue(this.datadriver)
      this.formvehicle.disable()
    }
  }
}
