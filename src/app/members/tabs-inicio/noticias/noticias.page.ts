import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  news : any;

  bar: boolean;
  constructor(private http:HttpGetdataDbService) { }


  

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.bar = true;
    this.news = [];
    this.http.get_all_news().subscribe((res)=>{
      this.news = res;
      this.bar = false;
      console.log(this.news);
    },
    (error)=>{
      console.log(error);
    });
    
  }

}
