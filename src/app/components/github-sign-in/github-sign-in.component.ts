import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-github-sign-in',
  templateUrl: './github-sign-in.component.html',
  styleUrls: ['./github-sign-in.component.css']
})
export class GithubSignInComponent implements OnInit {
  private shortcutUrl: string = environment.shortcut;
  private apiService: string = environment.apiService;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let code = '';
    let error = '';
    this.route.queryParams.subscribe(params => {
      code = '' + params.code;
      error = params.error;
    });

    this.httpClient.get<LoginCompleteResponse>(this.apiService + '/github/login/complete?code=' + code).toPromise()
      .then(resp => {
        localStorage.setItem('my-new-a', resp.jwt);
        document.cookie = 'my-new-a=' + resp.jwt + ';path=/;domain=my.new;max-age=15552000;secure;SameSite=Lax';
        window.location.href = this.shortcutUrl;
      })
      .catch(err => console.log(err));
  }
}

interface LoginCompleteResponse {
  jwt: string;
}
