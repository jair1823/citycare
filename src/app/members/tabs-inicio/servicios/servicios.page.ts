import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  services: any;
  bar:boolean;
  constructor(private http:HttpGetdataDbService) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.bar = true;
    this.services = [];
    this.http.get_all_services_home().subscribe((res)=>{
      this.services = res;
      this.bar = false;
      console.log(this.services);
    },
    (error)=>{
      console.log(error);
    });
    
  }
}
