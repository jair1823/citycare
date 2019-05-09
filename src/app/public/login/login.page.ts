import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  msg_error: string;
  valido:Boolean;

  bar: boolean;
  constructor(private autService: AuthenticationService) { }

  login() {
    this.bar = true;
    this.valido = true;
    if (this.email.length == 0 || this.password.length == 0) {
      this.valido = false;
      this.msg_error = "Rellene todos los campos";
      this.bar = false;
    }
    if(this.valido){
      this.autService.login(this.email, this.password).then(res => {
        if (!res) {
          this.msg_error = "Correo o contraseña incorrectos";
          this.bar = false;
        } else {
          this.msg_error = "";
          this.bar = false;
        }
      });
    }
  }

  ngOnInit() {
  }

}
