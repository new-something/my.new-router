import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrialRouteService} from '../../service/routes/trial-route.service';
import {AuthService} from '../../service/auth/auth.service';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-redirect-loading',
  templateUrl: './redirect-loading.component.html',
  styleUrls: ['./redirect-loading.component.css']
})
export class RedirectLoadingComponent implements OnInit {
  private appService = environment.appService;
  private shortcut = environment.shortcut;
  history: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private trialRouteService: TrialRouteService, private authService: AuthService,
              private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    const path = this.router.url.substr(1);
    if (this.authService.isAuthenticated()) {
      const url = this.appService + '/apis/users/destinations?keyword=' + path;
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('my-new-a'));
      this.httpClient.get<DestinationResponse>(url, {headers}).subscribe(
        resp => {
          window.location.href = resp.destination;
        },
        err => {
          console.log(err);
          if (err.status === 401) {
            this.router.navigate(['/s/logout']).catch(rError => console.log(rError));
          }

          if (err.status === 400) {
            alert(err.error.message + ', now, we are go to dashboard.');
            window.location.href = this.shortcut;
          }
        }
      );

      return;
    }

    const destination = this.trialRouteService.get(path);
    if (destination) {
      console.log('존재한다.');
      window.location.href = destination;
      return;
    }

    alert(`There is no destination for ${path}`);
    this.router.navigate(['']).catch(err => console.log(err));
  }
}

interface DestinationResponse {
  destination: string;
}
