import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
// CanActivate - Go to Definition
export class EmployeeDetailsGuardService implements CanActivate {
    // tslint:disable-next-line: variable-name
    constructor(private _employeeService: EmployeeService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._employeeService.getEmployee(+route.paramMap.get('id'))
        .pipe(
            map(employee => {
                const employeeExists = !!employee;

                if (employeeExists) {
                    return true;
                } else {
                    this._router.navigate(['notfound']);
                    return false;
                }
            }),
            catchError((err) => {
                console.log(err);
                return of (false);
            })
        );
    }
}
