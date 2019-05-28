import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';
import * as my_parent from '../../inicio-with-tabs/inicio-with-tabs.page';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  news: any;

  bar: boolean;
  bar2: boolean;
  fitro: boolean;

  filtrado: boolean = false;

  provincias: any;
  provincia: Number;

  cantones: any;
  canton: Number;

  distritos: any;
  distrito: Number;

  comunidades: any;
  comunidad: Number;

  grupos: any;
  grupo: Number;
  s1: boolean = false;
  s2: boolean = false;
  s3: boolean = false;
  s4: boolean = false;
  s5: boolean = false;
  constructor(private http: HttpGetdataDbService) { }

  ngOnInit() {
    this.cantones = [];
    this.distritos = [];
    this.comunidades = [];
    this.grupos = [];
    this.bar2 = true;
    this.provincias = my_parent.p;
    this.bar2 = false;
    /*this.http.get_filtros_home().subscribe((res) => {
     
      this.provincias = res;
    },
      (error) => {
        console.log(error);
      });
      */
  }

  ionViewWillEnter() {
    this.filtrado = my_parent.filtrado;
    this.bar = true;
    this.fitro = false;
    this.news = [];
    if (!my_parent.filtrado) {
      this.http.get_all_news().subscribe((res) => {
        this.news = res;
        this.bar = false;
      },
        (error) => {
          console.log(error);
        });
    } else {
      this.grupo = my_parent.grupo;
      this.http.news_by_filter_start({ id: this.grupo }).subscribe((res) => {
        this.news = res;
        this.bar = false;
      },
        (error) => {
          console.log(error);
        });
    }

  }

  no_filtrar() {
    my_parent.setFitrado(false);
    this.filtrado = false;
    my_parent.setGrupo(null);
    this.bar = true;
    this.news = [];
    this.http.get_all_news().subscribe((res) => {
      this.news = res;
      this.bar = false;
    },
      (error) => {
        console.log(error);
      });
  }

  filtrar() {
    my_parent.setFitrado(true);
    my_parent.setGrupo(this.grupo);
    this.filtrado = true;
    this.bar = true;
    this.news = [];
    this.http.news_by_filter_start({ id: this.grupo }).subscribe((res) => {
      this.news = res;
      this.bar = false;
    },
      (error) => {
        console.log(error);
      });
  }

  ocultar() {
    this.provincia =
      this.canton =
      this.distrito =
      this.comunidad =
      this.grupo = null;
    this.s1 =
      this.s2 =
      this.s3 =
      this.s4 =
      this.s5 = false;
  }

  changeprovincias() {
    for (let index = 0; index < this.provincias.length; index++) {
      const element = this.provincias[index];
      if (element.id == this.provincia) {
        this.http.get_cantones(element)
          .subscribe((res) => {
            this.cantones = res;

            this.canton =
              this.distrito =
              this.comunidad =
              this.grupo = null;
            this.s1 = true;
            this.s2 =
              this.s3 =
              this.s4 =
              this.s5 = false;
          },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  }

  changecantones() {
    for (let index = 0; index < this.cantones.length; index++) {
      const element = this.cantones[index];
      if (element.id == this.canton) {
        this.http.get_distritos(element)
          .subscribe((res) => {
            this.distritos = res;
            this.s2 = true;
            this.s3 =
              this.s4 =
              this.s5 = false;
            this.distrito =
              this.comunidad =
              this.grupo = null;
          },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  }

  changedistritos() {
    for (let index = 0; index < this.distritos.length; index++) {
      const element = this.distritos[index];
      if (element.id == this.distrito) {
        this.http.get_comunidades(element)
          .subscribe((res) => {
            this.comunidades = res;
            this.s3 = true;
            this.s4 =
              this.s5 = false;
            this.comunidad =
              this.grupo = null;
          },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  }

  changecomunidades() {
    for (let index = 0; index < this.comunidades.length; index++) {
      const element = this.comunidades[index];
      if (element.id == this.comunidad) {
        this.http.get_grupos(element)
          .subscribe((res) => {
            this.grupos = res;
            this.s4 = true;
            this.s5 = false;
            this.grupo = null;
          },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  }

  changegrupos() {
    this.s5 = true;
    console.log(this.grupo);
  }
}
