import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    {
      name: "Sign In",
      link: "/sign-in"
    },
    {
      name: "Register",
      link: "sign-up"
    }
  ]
  constructor() {
  }

  ngOnInit() {
  }

}
