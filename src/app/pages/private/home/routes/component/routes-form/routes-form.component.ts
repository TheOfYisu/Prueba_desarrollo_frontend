import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {RoutesService} from "../../../../../../core/services/routes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DriversFormComponent} from "../../../drivers/component/drivers-form/drivers-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrls: ['./routes-form.component.scss']
})
export class RoutesFormComponent implements OnInit{
  private id;
  formroute: FormGroup;
  formrouteedit: FormGroup;
  public statuactives = [
    {value: 0,description:"DESACTIVO"},
    {value: 1,description:"ACTIVO"}
  ];
  selectdrivers = [];
  selectvehicles = [];
  titleformvehicle = "Formulario Route";
  private datadriver = {};
  public validformaddoredit: boolean;

  public savebutton:boolean = false;

  constructor(
    private fb: FormBuilder,
    private RoutesService: RoutesService,
    private getrouter: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.createformroutes();
    this.getseletforms();
  }

  createformroutes() {
    this.formroute = this.fb.group({
      DESCRIPTION: [null, Validators.required],
      DRIVER: [null, Validators.required],
      VEHICLE: [null, Validators.required],
      ACTIVE: [null, Validators.required]
    })
  }

  createformedirtroutes() {
    this.formrouteedit = this.fb.group({
      DESCRIPTION_ROUTE: [null, Validators.required],
      ACTIVE_ROUTE: [null, Validators.required],
      ADDRESS: [null, Validators.required],
      CITY: [null, Validators.required],
      FIRST_NAME: [null, Validators.required],
      LAST_NAME: [null, Validators.required],
      CAPACITY: [null, Validators.required],
      DESCRIPTION_VEHICLE: [null, Validators.required]
    })
  }

  getseletforms() {
    this.RoutesService.listrdriver$.subscribe(data =>{
      this.selectdrivers=data;
    })
    this.RoutesService.listrvehicle$.subscribe(data =>{
      this.selectvehicles=data;
    })
  }

  sendformvehicle() {
    if (this.formroute.valid==true){
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
        if (this.validformaddoredit == true || this.savebutton==true) {
          this.RoutesService.updateroute(this.formroute.value,this.id)
        }else {
          this.RoutesService.addroute(this.formroute.value)
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

  get FormRouteValidator(): boolean {
    return this.formroute.valid;
  }

  deleteroute(){
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
        this.RoutesService.deleteroute(this.id)
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload()
            this.router.navigate(['/user/routes'])
          }
        })
      }
    })
  }

  buttoneditform() {
    this.RoutesService.allrouter$.subscribe(data=>{
      this.RoutesService.chargevar(false);
      this.formroute.enable();
      const datarouterform=data['DATAROUTER'];
      const datavehicleform=data['DATAVEHICLE'];
      const datadriverform=data['DATADRIVER'];
      this.formroute.get(["DESCRIPTION"]).patchValue(datarouterform['DESCRIPTION_ROUTE']);
      this.formroute.get(['DRIVER']).patchValue(datadriverform['ID_DRIVER']);
      this.formroute.get(['VEHICLE']).patchValue(datavehicleform['ID_VEHICLE']);
      this.formroute.get(['ACTIVE']).patchValue(datarouterform['ACTIVE_ROUTE']);
    })
    this.savebutton=true;
  }

  getAddorEdit() {
    this.RoutesService.valitformAddorEdit$.subscribe(data => {
      this.validformaddoredit = data;
    })
  }

  getdataallroute() {
    this.RoutesService.allrouter$.subscribe(data=>{
      this.formrouteedit.patchValue(data['DATADRIVER'])
      this.formrouteedit.patchValue(data['DATAROUTER'])
      this.formrouteedit.patchValue(data['DATAVEHICLE'])
    })
  }

  ngOnInit(): void {
    this.getAddorEdit()
    if (this.validformaddoredit == true) {
      this.getrouter.queryParams.subscribe(
        (params: Params) => {
          this.id=params['dataid']
        })
      this.RoutesService.getroute(this.id)
      this.createformedirtroutes()
      this.getdataallroute()
      this.formrouteedit.disable()
    }
  }
}
