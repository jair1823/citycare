import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {

  securitys: any;
  bar:boolean;

  constructor(private http:HttpGetdataDbService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.bar = true;
    this.securitys = [];
    this.http.get_all_security_home().subscribe((res)=>{
      this.securitys = res;
      this.bar = false;
      console.log(this.securitys);
    },
    (error)=>{
      console.log(error);
    });
    
  }
}
