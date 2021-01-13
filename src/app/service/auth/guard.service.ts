import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  private dashboardUrl = environment.dashboard;

  constructor(private authService: AuthService, private router: Router) { }

  // 인증이 되어 있는 경우, dashboard service 로 redirect 시킨다.
  // 인증이 되어 있지 않은 경우, landing 에 머무른다.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(document.cookie);
    let goDashboardService = false;
    this.authService.isAuthenticated().subscribe(auth => {
      goDashboardService = auth;
    });

    if (goDashboardService) {
      this.router.navigate([this.dashboardUrl]).catch(err => console.log(err));
    }

    return goDashboardService;
  }
}
