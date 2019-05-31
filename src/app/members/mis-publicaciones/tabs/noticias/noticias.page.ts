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
    this.http.get_all_news().subscribe((res) => {
      this.bar = false;
      this.authService.getUser().then(use => {
        this.user = use;
        this.news = res;
      });
    },
      (error) => {
        console.log(error);
      });





  }
}
