import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    const session = localStorage.getItem('my-new-a');
    return !!session;
  }
}
