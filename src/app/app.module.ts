import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule} from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component'
import { Angular2TokenService } from 'angular2-token';
import { UserComponent } from './user/user.component';
import { AnalyticsComponent } from './analytics/analytics.component'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    NotfoundComponent,
    UserComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'sign-in', component: SigninComponent},
      { path: 'sign-up', component: SignupComponent},
      { path: 'users/:id', component: UserComponent},
      { path: 'users/:id/analytics', component: AnalyticsComponent},
      { path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [ Angular2TokenService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

