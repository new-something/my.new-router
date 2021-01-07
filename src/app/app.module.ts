import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {RedirectLoadingComponent} from './components/redirect-loading/redirect-loading.component';
import {PathConcatComponent} from './components/path-concater/path-concat.component';
import {GuardService} from './service/auth/guard.service';

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [GuardService]},
  {path: 'loading/:service', component: RedirectLoadingComponent},
  {path: '**', component: PathConcatComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RedirectLoadingComponent,
    PathConcatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
