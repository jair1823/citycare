import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  services: any;
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
    this.http.get_all_services_home().subscribe((res) => {
      this.bar = false;
      this.authService.getUser().then(use => {
        this.user = use;
        this.services = res;
      });
    },
      (error) => {
        console.log(error);
      });
  }


}
