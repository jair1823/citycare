import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user = {
    id: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    avatar_path: ""
  };
  nombre: string;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getUser().then(res => {
      this.user = res;
      this.nombre = res['nombre'];
    });
  }

}
