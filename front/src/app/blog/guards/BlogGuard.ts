import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class BlogGuard implements CanActivate {
    
    constructor(private readonly router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const isUserAuthorized = false;
        
        if (!isUserAuthorized) {
            this.router.navigate(['login']);
        }
        
        return of(isUserAuthorized);
    }
}