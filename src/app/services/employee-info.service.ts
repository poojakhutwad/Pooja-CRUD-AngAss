import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeDetails } from '../models/employee-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {
   
  EmployeesChanged = new Subject<EmployeeDetails[]>();
  //List of all employees which displays always
  private Employees: EmployeeDetails[] = [
    new EmployeeDetails(1,'Pooja','Khutwad','Bibavewadi','pooja@gmail.com'),
    new EmployeeDetails(2,'Priya','Kale','Katraj','priya@gmail.com'),
    new EmployeeDetails(3,'Shweta','Bharne','Ambegav','shweta@gmail.com'),
    new EmployeeDetails(4,'Suhas','Pawar','Kondhwa','suhas@gmail.com')
  ]  

  //get all employees
  getEmployee(){
    return this.Employees.slice();
  }

  getEmployeeById(index: number){
    return this.Employees[index];
  }

  //add new employee
  addEmployee(Employee: EmployeeDetails){
    this.Employees.push(Employee);
    this.EmployeesChanged.next(this.Employees.slice());
  }

  //Update Employee
  updateEmployee(index: number, newEmployee: EmployeeDetails){
    this.Employees[index] = newEmployee;
    this.EmployeesChanged.next(this.Employees.slice());
  }

  //delete employee
  deleteEmployee(index: number){
    this.Employees.splice(index, 1);
    this.EmployeesChanged.next(this.Employees.slice());
  }
}
