import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';
import * as my_parent from '../../inicio-with-tabs/inicio-with-tabs.page';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {

  securitys: any;
  bar: boolean;
  bar2: boolean;
  fitro: boolean;

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
      this.bar2 = false;
      this.provincias = res;
    },
      (error) => {
        console.log(error);
      });
      */
  }

  ionViewWillEnter() {
    this.bar = true;
    this.fitro = false;
    this.securitys = [];
    if (!my_parent.filtrado) {
      this.http.get_all_security_home().subscribe((res) => {
        this.securitys = res;
        this.bar = false;
      },
        (error) => {
          console.log(error);
        });
    }
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
