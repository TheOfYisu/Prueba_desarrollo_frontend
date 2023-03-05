import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RoutesService} from "../../../../../../core/services/routes.service";
import {VehiclesFormComponent} from "../../../vehicles/component/vehicles-form/vehicles-form.component";
import {RoutesFormComponent} from "../routes-form/routes-form.component";

@Component({
  selector: 'app-routes-main',
  templateUrl: './routes-main.component.html',
  styleUrls: ['./routes-main.component.scss']
})
export class RoutesMainComponent {
  constructor(
    private RoutesService: RoutesService,
    public dialog: MatDialog
  ) {
  }
  formadddriver() {
    this.openDialog()
    this.RoutesService.chargevar(false)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RoutesFormComponent);
    'modal-xl'
    dialogRef.afterClosed();
  }
}
