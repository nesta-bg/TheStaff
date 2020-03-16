import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employeeList.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  // tslint:disable-next-line: variable-name
  private _searchTerm: string;
  error: string;

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
  constructor( private _router: Router, private _route: ActivatedRoute) {
    const resolvedEmployeeList: ResolvedEmployeeList = this._route.snapshot.data.employeeList;

    if (resolvedEmployeeList.error == null) {
      this.employees = resolvedEmployeeList.employeeList;
    } else {
      this.error = resolvedEmployeeList.error;
    }

    this._route.queryParamMap.subscribe((queryParams) => {
      if (queryParams.has('searchTerm')) {
        this.searchTerm = queryParams.get('searchTerm');
      } else {
        this.filteredEmployees = this.employees;
      }
    });
  }

  ngOnInit() {

  }

  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.filteredEmployees.splice(i, 1);
    }
  }

}
