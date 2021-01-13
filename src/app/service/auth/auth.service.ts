import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelperService: JwtHelperService, private cookieService: CookieService) { }

  isAuthenticated(): Observable<boolean> {
    const cookie = this.cookieService.get('my-new-a');
    console.log('========================================');
    console.log(cookie);
    console.log('========================================');
    const session = localStorage.getItem('my-new-a');
    return new Observable<boolean>(subscriber => {
      subscriber.next(!!session);
    });
  }
}
