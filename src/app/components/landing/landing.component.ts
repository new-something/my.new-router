import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
    // my.new 도메인 입력하여 방문 시 로그인 되어있지 않은 사용자가 바로 로그인하게 유도한다 (구글 .new 도메인 정책)
    this.openSignInPopup();
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
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=737679013674-q9efp32jd44hu4gmetvavqr64d9rj97h.apps.googleusercontent.com&response_type=code&state=state_parameter_passthrough_value&scope=https%3A//www.googleapis.com/auth/userinfo.profile&redirect_uri=https%3A//user.my.new/users/google&prompt=consent&include_granted_scopes=true';
  }
}
