import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-sign-out',
  templateUrl: './single-sign-out.component.html',
  styleUrls: ['./single-sign-out.component.css']
})
export class SingleSignOutComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem('my-new-a');
    this.deleteSSOCookie('my-new-a', '/', 'my.new');
    this.router.navigate(['']).catch(err => console.log(err));
  }

  deleteSSOCookie(name: string, path: string, domain: string): void {
    if (this.getSSOCookie(name)) {
      document.cookie = name + '=' + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
  }

  getSSOCookie(name: string): boolean {
    return document.cookie.split(';').some(c => {
      return c.trim().startsWith(name + '=');
    });
  }

}
