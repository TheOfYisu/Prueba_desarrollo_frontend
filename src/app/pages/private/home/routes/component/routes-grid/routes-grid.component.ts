import {Component} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {RoutesService} from "../../../../../../core/services/routes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-routes-grid',
  templateUrl: './routes-grid.component.html',
  styleUrls: ['./routes-grid.component.scss']
})
export class RoutesGridComponent {
  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = ['DESCRIPTION', 'DRIVER', 'VEHICLE', 'ACTIVE'];

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
