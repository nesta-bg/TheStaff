import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { map, catchError } from 'rxjs/operators';
import { ResolvedEmployeeList } from './resolved-employeeList.model';

@Injectable()
export class EmployeeListResolverService implements Resolve<ResolvedEmployeeList> {
    // tslint:disable-next-line: variable-name
    constructor(private _employeeService: EmployeeService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeeList> {
        // If the observable service is being consumed by a Resolver,
        // the resolver service will subscribe to the Observable, we do not have to explicitly subscribe.
        return this._employeeService.getEmployees()
            .pipe(
                map((employeeList) => new ResolvedEmployeeList(employeeList)),
                catchError((err: any) => of(new ResolvedEmployeeList(null, err)))
        );
    }
}
