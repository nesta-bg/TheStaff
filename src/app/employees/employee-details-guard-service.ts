import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable()
// CanActivate - Go to Definition
export class EmployeeDetailsGuardService implements CanActivate {
    // tslint:disable-next-line: variable-name
    constructor(private _employeeService: EmployeeService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // to convert the result to boolean we use !!
        const employeeExists = !!this._employeeService.getEmployee(+route.paramMap.get('id'));

        if (employeeExists) {
            return true;
        } else {
            this._router.navigate(['/notfound']);
            return false;
        }
    }
}
