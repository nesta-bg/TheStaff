import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  // tslint:disable-next-line: variable-name
  private _searchTerm: string;

 // We are binding to this property in the view template, so this
  // getter is called when the binding needs to read the value
  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((empList) => {
      this.employees = empList;

      this._route.queryParamMap.subscribe((queryParams) => {
        if (queryParams.has('searchTerm')) {
          this.searchTerm = queryParams.get('searchTerm');
        } else {
          this.filteredEmployees = this.employees;
        }
      });
    });

    // console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.keys);
    // // for required and optional
    // console.log(this._route.snapshot.paramMap.keys);

    // // Snapshot Approach
    // if (this._route.snapshot.queryParamMap.has('searchTerm')) {
    //   this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    // } else {
    //   this.filteredEmployees = this.employees;
    // }

    // Observable Approach
    // this._route.queryParamMap.subscribe((queryParams) => {
    //   if (queryParams.has('searchTerm')) {
    //     this.searchTerm = queryParams.get('searchTerm');
    //   } else {
    //     this.filteredEmployees = this.employees;
    //     console.log(this.employees.length);
    //     console.log('Else Block : ' + new Date().toTimeString());
    //   }
    // });
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId], {
      queryParams: { searchTerm: this.searchTerm, testParam: 'testValue' }
    });
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
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
  }

  onMouseMove() {

  }

}
