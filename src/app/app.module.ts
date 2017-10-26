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
import { Angular2TokenService } from 'angular2-token'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'sign-in', component: SigninComponent},
      { path: 'sign-up', component: SignupComponent},
      { path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [ Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }

