import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _employeeId: number;

  @Input()
  set employeeId(val: number) {
    console.log('employeeId changed from ' + JSON.stringify(this._employeeId)
      + ' to ' + JSON.stringify(val));
    this._employeeId = val;
  }
  get employeeId(): number {
    return this._employeeId;
  }

  // tslint:disable-next-line: variable-name
  private _employee: Employee;

  // This property setter is called anytime the input property changes
  @Input()
  set employee(val: Employee) {
    console.log('employee changed from ' + JSON.stringify(this._employee)
    + ' to ' + JSON.stringify(val));
    this._employee = val;
  }

  // This getter is called when reading and displaying data
  get employee(): Employee {
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }

}
