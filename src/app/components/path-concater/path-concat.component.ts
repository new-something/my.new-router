import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-path-concater',
  templateUrl: './path-concat.component.html',
  styleUrls: ['./path-concat.component.css']
})
export class PathConcatComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log(this.route);
    console.log(this.route.url.substr(1));
    const path = '/loading/' + this.route.url.substr(1);
    this.route.navigate([path]).catch(e => console.log(e));
  }

}
