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
  public statuactives = [
    {value: 0,description:"DESACTIVO"},
    {value: 1,description:"ACTIVO"}
  ];
  titleformvehicle = "Formulario Vehicle";
  private datavehicle = {};
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
      this.datavehicle = data
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
          this.VehiclesService.updatevehicle(this.formvehicle.value,this.datavehicle['ID'])
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
      this.formvehicle.patchValue(this.datavehicle)
      this.formvehicle.disable()
    }
  }
}
