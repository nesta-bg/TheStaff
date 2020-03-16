import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]> {
    // tslint:disable-next-line: variable-name
    constructor(private _employeeService: EmployeeService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
        // If the observable service is being consumed by a Resolver,
        // the resolver service will subscribe to the Observable, we do not have to explicitly subscribe.
        return this._employeeService.getEmployees();
    }
}
