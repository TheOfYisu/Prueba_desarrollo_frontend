import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {RoutesService} from "../../../../../../core/services/routes.service";

@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrls: ['./routes-form.component.scss']
})
export class RoutesFormComponent {
  formvehicle: FormGroup;
  statusactive = [{value: 'True'}, {value: 'False'}];
  drives = [{value: 'juan',id:1}, {value: 'pedro',id:2}];
  vehicles = [{value: 'che',id:1}, {value: 'ford',id:2}];
  titleformvehicle = "Formulario Route";
  private datadriver = {};
  validformaddoredit: boolean;

  savebutton:boolean

  constructor(
    private fb: FormBuilder,
    private RoutesService: RoutesService
  ) {
    this.createformroutes();
  }

  createformroutes() {
    this.formvehicle = this.fb.group({
      DESCRIPTION: [null, Validators.required],
      DRIVER: [null, Validators.required],
      VEHICLE: [null, Validators.required],
      ACTIVE: [null, Validators.required]
    })
  }

  getFormVehicleValidator(): boolean {
    return this.formvehicle.valid;
  }

  getvehicle() {

  }

  sendformvehicle() {
    if (this.formvehicle.valid==true){


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
          this.RoutesService.updateroute(this.formvehicle.value)
        } else {
          this.RoutesService.addroute(this.formvehicle.value)
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
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        text: 'Validate if the form is complete.',
        confirmButtonColor: '#3085d6',
        toast: true
      })
    }
  }

  buttoneditform() {
    this.formvehicle.enable()
    this.savebutton=true;
  }

  getAddorEdit() {
    this.RoutesService.valitformAddorEdit$.subscribe(data => {
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
