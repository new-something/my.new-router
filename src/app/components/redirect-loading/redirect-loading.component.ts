import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TrialRouteService} from '../../service/routes/trial-route.service';

@Component({
  selector: 'app-redirect-loading',
  templateUrl: './redirect-loading.component.html',
  styleUrls: ['./redirect-loading.component.css']
})
export class RedirectLoadingComponent implements OnInit {
  history: string[] = [];

  constructor(private router: ActivatedRoute, private trialRouteService: TrialRouteService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log(params);
      console.log(params.service);
      console.log(this.trialRouteService.has(params.service));
      console.log(this.trialRouteService.get(params.service));
      const destination = this.trialRouteService.get(params.service);
      if (destination) {
        console.log('존재한다.');
        window.location.href = destination;
      }
    });
  }
}
