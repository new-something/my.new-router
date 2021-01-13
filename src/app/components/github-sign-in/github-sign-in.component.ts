import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-github-sign-in',
  templateUrl: './github-sign-in.component.html',
  styleUrls: ['./github-sign-in.component.css']
})
export class GithubSignInComponent implements OnInit {
  private shortcutUrl: string = environment.shortcut;
  private userService: string = environment.userService;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute,
              private jwtHelperService: JwtHelperService) {}

  ngOnInit(): void {
    let code = '';
    let error = '';
    this.route.queryParams.subscribe(params => {
      code = '' + params.code;
      error = params.error;
    });

    this.httpClient.get<LoginCompleteResponse>(this.userService + '/github/login/complete?code=' + code).toPromise()
      .then(resp => {
        console.log(resp.jwt);
        const decodeToken = this.jwtHelperService.decodeToken(resp.jwt);
        console.log(decodeToken);
        localStorage.setItem('my-new-a', resp.jwt);
        const cookieText = 'my-new-a=' + resp.jwt + ';path=/;domain=my.new;max-age=15552000;secure;SameSite=Lax';
        console.log(cookieText);
        document.cookie = cookieText;
        console.log('cookie 가 set 되어야 된다구...');
        window.location.href = this.shortcutUrl;
      })
      .catch(err => console.log(err));
  }
}

interface LoginCompleteResponse {
  jwt: string;
}
