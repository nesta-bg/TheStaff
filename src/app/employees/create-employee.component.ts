import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // BsDatepickerConfig -> go to the definition
  datePickerConfig: Partial<BsDatepickerConfig>;
  dateOfBirth: Date = new Date(2020, 0, 30);
  previewPhoto = false;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign({},
      { containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2020, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
