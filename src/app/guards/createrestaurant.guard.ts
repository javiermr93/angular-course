import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreaterestaurantGuard implements CanActivate {
  constructor(private route: Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('userLogged')) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }

}
