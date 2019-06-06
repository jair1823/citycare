import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  news: any;

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
          this.http.get_all_news().subscribe((res) => {
            this.news = res;
            this.bar = false;
          },
            (error) => {
              console.log(error);
            });
        });
    });
  }

}
