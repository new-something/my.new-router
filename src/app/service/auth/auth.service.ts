import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): Observable<boolean> {
    alert(document.cookie);
    const session = localStorage.getItem('my-new-a');
    return new Observable<boolean>(subscriber => {
      subscriber.next(!!session);
    });
  }
}
