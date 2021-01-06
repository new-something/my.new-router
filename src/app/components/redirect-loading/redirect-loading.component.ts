import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TrialRoute} from '../../model/trial-route';

@Component({
  selector: 'app-redirect-loading',
  templateUrl: './redirect-loading.component.html',
  styleUrls: ['./redirect-loading.component.css']
})
export class RedirectLoadingComponent implements OnInit {
  history: string[] = [];

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log(params);
      console.log(params.service);
      console.log(TrialRoute.has(params.service));
      console.log(TrialRoute.get(params.service));
      if (TrialRoute.has(params.service)) {
        console.log('존재한다.');
      }
    });
  }
}
