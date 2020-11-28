import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/models/employee-details';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empInfo = new EmployeeDetails(0,'','','','');
  id: number;
  empIn;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empDetailsService: EmployeeInfoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("==>",this.id);
    this.empIn = this.empDetailsService.getEmployeeById(this.id);
    this.empInfo.empId = this.empIn['empId'];
    this.empInfo.firstName = this.empIn['firstName'];
    this.empInfo.lastName = this.empIn['lastName'];
    this.empInfo.address = this.empIn['address'];
    this.empInfo.email = this.empIn['email'];   
  }

  Edit(empDtls){
    this.empDetailsService.updateEmployee(this.id, empDtls);

  }

}
