import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeDetails } from 'src/app/models/employee-details';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['empId','firstName','lastName','address','email','action'];
  dataSource: MatTableDataSource<[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private subscription: Subscription;
  Employees: any[];
  employees: any[];

  progress: number;
  total: number;
  color: string;

  constructor(
    private router: Router,
    private empInfoService: EmployeeInfoService) {

      this.Employees = this.empInfoService.getEmployee();
      this.dataSource = new MatTableDataSource(this.Employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

  ngOnInit(){
    this.total = 100;
    this.progress = this.Employees.length; 
    //if we don't have progress, set it to 0.
    if(!this.progress) {
      this.progress = 0;
    }

    if(this.total === 0) {
      this.total = this.progress;
    } else if(!this.total) {
      this.total = 100;
    }

    if(this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
    }
    this.progress = (this.progress / this.total) * 100;
    if(this.progress < 55) {
      this.color = 'red';
    }else if(this.progress < 75) {
      this.color= 'yellow';
    }else {
      this.color = 'green';
    }
  }

  Delete(id){
    console.log("Idddd is===>",id);
    if(!confirm('Are you sure you want to delete this employee???'))return;
    this.empInfoService.deleteEmployee(id);
    this.router.navigate(['/list']);
  }

  ngOnDestroy(){
  }

}
