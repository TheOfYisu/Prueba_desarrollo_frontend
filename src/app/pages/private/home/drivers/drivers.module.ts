import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriversRoutingModule} from './drivers-routing.module';
import {DriversMainComponent} from './component/drivers-main/drivers-main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DriversFormComponent} from './component/drivers-form/drivers-form.component';
import {DriversGridComponent} from './component/drivers-grid/drivers-grid.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select'
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    DriversMainComponent,
    DriversFormComponent,
    DriversGridComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class DriversModule {
}
