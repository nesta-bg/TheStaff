import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchTerm: string;
  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }

  // click on the button Change Employee Name
  // changeEmployeeName() {
  //   this.employees[0].name = 'Jordan';
  // }

  // type J in the search box and then click on the button Change Employee Name
  // changeEmployeeName() {
  //   const newEmployeeArray: Employee[] = Object.assign([], this.employees);
  //   newEmployeeArray[0].name = 'Jordan';
  //   this.employees = newEmployeeArray;
  // }

  // type J in the search box and then click on the button Change Employee Name
  changeEmployeeName() {
    this.employees[0].name = 'Jordan';
  }

  onMouseMove() {

  }

}
