import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpGetdataDbService {

  url_select_news = 'https://comunidades-organizadas.000webhostapp.com/mobile/select_all_news.php';
  url_select_services_home = 'https://comunidades-organizadas.000webhostapp.com/mobile/select_all_services.php';
  url_select_security_home = 'https://comunidades-organizadas.000webhostapp.com/mobile/select_all_security.php';
  url_select_filtros = 'https://comunidades-organizadas.000webhostapp.com/mobile/select_filtros.php';
  provincias = 'https://comunidades-organizadas.000webhostapp.com/mobile/filtros/provincias.php';
  cantones = 'https://comunidades-organizadas.000webhostapp.com/mobile/filtros/cantones.php';
  distritos = 'https://comunidades-organizadas.000webhostapp.com/mobile/filtros/distritos.php';
  comunidades = 'https://comunidades-organizadas.000webhostapp.com/mobile/filtros/comunidades.php';
  grupos = 'https://comunidades-organizadas.000webhostapp.com/mobile/filtros/grupos.php';
  news_start_filter = 'https://comunidades-organizadas.000webhostapp.com/mobile/start_filter/news_by_filter.php';
  security_start_filter = 'https://comunidades-organizadas.000webhostapp.com/mobile/start_filter/security_by_filter.php';
  services_start_filter = 'https://comunidades-organizadas.000webhostapp.com/mobile/start_filter/services_by_filter.php';

  constructor(private http: HttpClient) { }

  services_by_filter_start(by: any) {
    return this.http.post(this.services_start_filter, JSON.stringify(by));
  }
  security_by_filter_start(by: any) {
    return this.http.post(this.security_start_filter, JSON.stringify(by));
  }
  news_by_filter_start(by: any) {
    return this.http.post(this.news_start_filter, JSON.stringify(by));
  }

  get_grupos(by: any) {
    return this.http.post(this.grupos, JSON.stringify(by));
  }
  get_comunidades(by: any) {
    return this.http.post(this.comunidades, JSON.stringify(by));
  }
  get_distritos(by: any) {
    return this.http.post(this.distritos, JSON.stringify(by));
  }
  get_cantones(by: any) {
    return this.http.post(this.cantones, JSON.stringify(by));
  }
  get_provincias() {
    return this.http.get(this.provincias);
  }
  get_all_news() {
    return this.http.get(this.url_select_news);
  }
  get_all_services_home() {
    return this.http.get(this.url_select_services_home);
  }
  get_all_security_home() {
    return this.http.get(this.url_select_security_home);
  }
  get_filtros_home() {
    return this.http.get(this.url_select_filtros);
  }
}
