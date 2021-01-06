import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-new-router';

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
    console.log('호출 되냐?');
    console.log(event);
    console.log(event.target.value);
    const button = document.getElementById('buttonOpenInNewTab');
    button.setAttribute('href', '/' + event.target.value);
  }
}
