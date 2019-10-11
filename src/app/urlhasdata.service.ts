import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class UrlHasDataActivate implements CanActivate {
    constructor(private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        console.log("route-access",state);
        if(state.url.split('/').length===4){
          return true;
        }
        this._router.navigate(['/']);
    }




    

}