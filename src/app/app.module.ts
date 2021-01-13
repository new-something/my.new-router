import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {RedirectLoadingComponent} from './components/redirect-loading/redirect-loading.component';
import {GithubSignInComponent} from './components/github-sign-in/github-sign-in.component';
import {PathConcatComponent} from './components/path-concater/path-concat.component';
import {GuardService} from './service/auth/guard.service';
import { SingleSignOutComponent } from './components/single-sign-out/single-sign-out.component';

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [GuardService]},
  {path: 's/github', component: GithubSignInComponent},
  {path: 's/logout', component: SingleSignOutComponent},
  {path: 'loading/:service', component: RedirectLoadingComponent},
  {path: '**', component: PathConcatComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RedirectLoadingComponent,
    PathConcatComponent,
    GithubSignInComponent,
    SingleSignOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('my-new-a');
        }
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
