import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  username: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.loadName()
  }

  loadName():void{
    if (this.authService.isAuthenticated()){
      this.username = this.authService.getUsername()
    }
  }

}
