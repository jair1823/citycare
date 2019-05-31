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
  bar: boolean;
  user = {
    id: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    avatar_path: ""
  };
  constructor(private http: HttpGetdataDbService, private authService: AuthenticationService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.bar = true;
    this.http.get_all_security_home().subscribe((res) => {
      this.bar = false;
      this.authService.getUser().then(use => {
        this.user = use;
        this.securitys = res;
      });
    },
      (error) => {
        console.log(error);
      });
  }

}
