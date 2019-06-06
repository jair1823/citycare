import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidades.page.html',
  styleUrls: ['./comunidades.page.scss'],
})
export class ComunidadesPage implements OnInit {

  constructor(private http: HttpGetdataDbService) { }

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



  ngOnInit() {
    this.http.get_provincias().subscribe((res) => {
      this.provincias = res;

    },
      (error) => {
        console.log(error);
      });
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
            this.grupo = null;
            console.log(this.grupos);
          },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  }
}
