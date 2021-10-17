import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private accountService: AccountService, private toast: ToastrService){}
  canActivate(): Observable<boolean> {

    return this.accountService.CurrentUser$.pipe(
      map( user => {
        if(!user){
          this.toast.error('you shall not pass!');
        }
        return !!user;
      })
    );

  }
  
}
