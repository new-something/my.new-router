import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  public openSignInPopup(): void {
    document.querySelector('#signinPopup').classList.add('is-active');
  }

  public closeSignInPopup(): void {
    document.querySelector('#signinPopup').classList.remove('is-active');
  }

  public changeDestination(event: any): void {
    const button = document.getElementById('buttonOpenInNewTab');
    button.setAttribute('href', '/' + event.target.value);
  }

  public startGithubSignIn(): void {
    window.location.href = 'https://github.com/login/oauth/authorize?scope=read:user&client_id=6d91f0584d549619c938';
  }

  public startGoogleSignIn(): void {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=737679013674-q9efp32jd44hu4gmetvavqr64d9rj97h.apps.googleusercontent.com&response_type=code&state=state_parameter_passthrough_value&scope=https%3A//www.googleapis.com/auth/userinfo.profile&redirect_uri=https://my.new/s/google&prompt=consent&include_granted_scopes=true';
  }

  public onClickScroll(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
