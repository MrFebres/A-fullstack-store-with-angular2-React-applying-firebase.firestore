import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService , private db: AngularFirestore) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.authSvc.getUsers().subscribe(res => {
      console.log('Users', res);
      let array = res;
      alert(`Inice sesión con los siguientes datos:
      email: ${array[0].email}
      password: ${array[0].password}
      Ó con los siguientes:
      email: ${array[1].email}
      password: ${array[1].password}`)
    })
  }

  onLogin(form) {
    this.authSvc.loginByEmail(form);
  }


}
