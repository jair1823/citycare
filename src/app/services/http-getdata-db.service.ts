import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpGetdataDbService {

  url_select_news:string='https://comunidades-organizadas.000webhostapp.com/mobile/select_all_news.php';

  constructor(private http: HttpClient) { }

  get_all_news(){
    //esto es un observable, lo trato con subcribe
    //.toPromise(); para volverlo promesa y tratarlo con then
    return this.http.get(this.url_select_news);
  }

}
