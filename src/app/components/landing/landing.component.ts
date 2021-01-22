import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // my.new 도메인 입력하여 방문 시 로그인 되어있지 않은 사용자가 바로 로그인하게 유도한다 (구글 .new 도메인 정책)
    this.openSignInPopup();
  }

  openSignInPopup(): void {
    document.querySelector('#signinPopup').classList.add('is-active');
  }

  closeSignInPopup(): void {
    document.querySelector('#signinPopup').classList.remove('is-active');
  }

  changeDestination(event: any): void {
    const button = document.getElementById('buttonOpenInNewTab');
    button.setAttribute('href', '/' + event.target.value);
  }

  startSignIn(): void {
    window.location.href = 'https://github.com/login/oauth/authorize?scope=read:user&client_id=6d91f0584d549619c938';
    // window.location.href = this.dashboardUrl;
  }

}
