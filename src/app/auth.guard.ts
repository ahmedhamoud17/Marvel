import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate():any {
    if (localStorage.getItem('token') !== null){
      return true
    }
    else{
      this._router.navigate(['/login']);
      return false
    }
  }
}