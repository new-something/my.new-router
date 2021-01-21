import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  private shortcutUrl = environment.shortcut;

  constructor(private authService: AuthService) {
  }

  // 인증이 되어 있는 경우, dashboard service 로 redirect 시킨다.
  // 인증이 되어 있지 않은 경우, landing 에 머무른다.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      window.location.href = this.shortcutUrl;
      return false;
    }

    return true;
  }
}
