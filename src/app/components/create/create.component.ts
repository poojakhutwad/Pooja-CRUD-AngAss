import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from '../../models/employee-details';
import { EmployeeInfoService } from '../../services/employee-info.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  empInfo = new EmployeeDetails(0,'','','','');
  constructor(
    private router: Router,
    private empInfoService: EmployeeInfoService) { }

  ngOnInit(): void {
  }

  Submit(empDtls){
    console.log(empDtls);
    const newEmployee = new EmployeeDetails(empDtls.empId, empDtls.firstName, empDtls.lastName, empDtls.address, empDtls.email);
    this.empInfoService.addEmployee(newEmployee);
    this.router.navigate(['/list']);
  }

}
