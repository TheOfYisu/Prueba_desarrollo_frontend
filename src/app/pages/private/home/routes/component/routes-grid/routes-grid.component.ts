import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {RoutesService} from "../../../../../../core/services/routes.service";
import {Router} from "@angular/router";
import {Active_enum} from "../../../../../../core/enums/general-enums";

@Component({
  selector: 'app-routes-grid',
  templateUrl: './routes-grid.component.html',
  styleUrls: ['./routes-grid.component.scss']
})
export class RoutesGridComponent implements OnInit{
  public dataSource !: MatTableDataSource<any>;
  public displayedColumns: string[] = ['DESCRIPTION', 'DRIVER', 'VEHICLE', 'ACTIVE'];
  public Active_enum = Active_enum;

  constructor(
    private router: Router,
    private RoutesService: RoutesService
  ) {
    this.getlistdrivers()
  }

  getdrivers(dataid) {
    this.RoutesService.chargevar(true)
    this.router.navigate(['/user/routes/form'], {queryParams: {dataid}})
  }

  getlistdrivers() {
    this.RoutesService.listroutes$.subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error => {
        console.log(error)
      }))
  }

  ngOnInit(): void {
    this.getlistdrivers()
  }

}
