import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private AuthSvc: AuthService) { }

  ngOnInit(): void {
  }

  closeSession() {
    this.AuthSvc.logOut();
  }

}
