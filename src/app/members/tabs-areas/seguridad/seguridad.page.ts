import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {

  securitys: any;

  grupos: any;
  grupo: Number;

  bar: boolean;
  fitro: boolean;

  user = {
    id: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    avatar_path: ""
  };


  constructor(private http: HttpGetdataDbService,
    private auth: AuthenticationService
  ) { }



  ngOnInit() {
    this.fitro = false;
    this.auth.getUser().then(use => {
      this.user = use;
      this.http.select_mis_comunidades_a(this.user).
        subscribe((res) => {
          this.grupos = res;
          this.grupo = this.grupos[0].id;
          console.log(this.grupos);
          this.http.get_all_security_home().subscribe((res) => {
            this.securitys = res;
            this.bar = false;
          },
            (error) => {
              console.log(error);
            });
        });
    });
  }

}
