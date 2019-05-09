import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'

const TOKEN_KEY = 'user_token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storege: Storage, private plt: Platform, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  login(email: string, password: string) {
    let data = {
      email: email,
      password: password
    }
    return new Promise((resolve) => {
      this.http.post('https://comunidades-organizadas.000webhostapp.com/mobile/auth_user.php', JSON.stringify(data))
        .subscribe(data => {
          if (!data['error']) {
            this.storege.set(TOKEN_KEY, data).then(res => {
              this.authenticationState.next(true);
            });
            resolve(true);
          }else{
            resolve(false);
          }
        });
    });
  }

  logout() {
    return this.storege.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    // reviso si ya esta registrado
    return this.authenticationState.value;
  }
  getUser() {
    return this.storege.get(TOKEN_KEY);
  }
  checkToken() {
    /* esto sucede solo cuando se inicia la app
      es lo que genera que se mantega la session iniciada
    */
    return this.storege.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

}
