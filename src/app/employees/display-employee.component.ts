import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employeeId: number;

  // tslint:disable-next-line: variable-name
  private _employee: Employee;

  // This property setter is called anytime the input property changes
  @Input()
  set employee(val: Employee) {
    this._employee = val;
  }

  // This getter is called when reading and displaying data
  get employee(): Employee {
    return this._employee;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {
      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);
      console.log(propName + ' changed from ' + from + ' to ' + to);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
