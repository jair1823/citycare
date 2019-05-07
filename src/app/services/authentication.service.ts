import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'user_token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user = {
    id: 4,
    email: "example@email.com",
    avatar_path: "123456.jpg"
  }
  authenticationState = new BehaviorSubject(false);

  constructor(private storege: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    })
  }

  login(email:string,password:string) {
    
    return this.storege.set(TOKEN_KEY, this.user).then(res => {
      //quiero guardar el usuario en el storage
      //primero debo hacer un llamado a la base de datos
      //luego manipular el resultado que me dieron.  
      if(email == "jair" && password == "123"){
        this.authenticationState.next(true);
      }
      
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
