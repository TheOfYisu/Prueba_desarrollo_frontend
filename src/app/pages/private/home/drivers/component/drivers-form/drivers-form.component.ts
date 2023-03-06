import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DriversService} from "../../../../../../core/services/drivers.service";
import Swal from "sweetalert2";
import {Active_enum} from "../../../../../../core/enums/general-enums";

@Component({
  selector: 'app-drivers-form',
  templateUrl: './drivers-form.component.html',
  styleUrls: ['./drivers-form.component.scss']
})
export class DriversFormComponent implements OnInit {
  formdrivers: FormGroup;
  titleformdevice = "Formulario Device";
  private datadriver = {};
  public validformaddoredit: boolean;
  public Active_enum = Active_enum
  public statuactives = [
    {value: 0,description:"DESACTIVO"},
    {value: 1,description:"ACTIVO"}
  ];

  constructor(
    private fb: FormBuilder,
    private DriversService: DriversService
  ) {
    this.createformdriver();
  }

  createformdriver() {
    this.formdrivers = this.fb.group({
      LAST_NAME: [null, Validators.required],
      FIRST_NAME: [null, Validators.required],
      SSD: [null, Validators.required],
      DOB: [null, Validators.required],
      ADDRESS: [null, Validators.required],
      CITY: [null, Validators.required],
      ZIP: [null, Validators.required],
      PHONE: [null, Validators.required],
      ACTIVE: [null, Validators.required]
    })
  }

  getFormDeviceValidator(): boolean {
    return this.formdrivers.valid;
  }

  getdriver() {
    this.DriversService.driver$.subscribe(data => {
      this.datadriver = data
    })
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + (date.getDate()+1)).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  sendformderiver() {
    this.formdrivers.get("DOB").patchValue(this.convert(this.formdrivers.get("DOB").value))
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
        if(this.validformaddoredit == true){
          this.DriversService.updatedriver(this.formdrivers.value,this.datadriver['ID'])
        }else {
          this.DriversService.adddriver(this.formdrivers.value)
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
    this.formdrivers.enable()
  }

  getAddorEdit(){
    this.DriversService.valitformAddorEdit$.subscribe(data => {
      this.validformaddoredit=data;
    })
  }
  ngOnInit(): void {
    this.getAddorEdit()
    if (this.validformaddoredit == true) {
      this.getdriver()
      this.formdrivers.patchValue(this.datadriver)
      this.formdrivers.get("DOB").patchValue(this.convert(this.formdrivers.get("DOB").value))
      this.formdrivers.disable()
    }
  }
}
