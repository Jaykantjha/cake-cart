import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn;

  constructor(public authService: AuthService) {
    this.loggedIn = this.authService.loggedIn;
  }

  ngOnInit() {

  }
  onLogout() {
    this.authService.logout();
  }

}
