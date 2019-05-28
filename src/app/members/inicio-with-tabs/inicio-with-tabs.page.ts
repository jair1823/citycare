import { Component, OnInit } from '@angular/core';
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';
import { LoadingController } from '@ionic/angular';
export var filtrado: boolean;
export function setFitrado(newVaule:boolean){
  filtrado = newVaule;
}
export var grupo: Number;
export function setGrupo(newVaule:Number){
  grupo = newVaule;
}

export var p:any;
@Component({
  selector: 'app-inicio-with-tabs',
  templateUrl: './inicio-with-tabs.page.html',
  styleUrls: ['./inicio-with-tabs.page.scss'],
})
export class InicioWithTabsPage implements OnInit {
  loaderToShow: any;
  cargadas: boolean = false;
  constructor(private http: HttpGetdataDbService, public loadingController: LoadingController) { }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Cargando Información'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
   // this.hideLoader();
  }
 
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 2000);
    this.cargadas = true;
  }

  ngOnInit() {
    filtrado = false;
    this.showLoader();
    
    this.http.get_provincias().subscribe((res) => {
      p = res;
      this.hideLoader();
      
      
    },
      (error) => {
        console.log(error);
      });
  }

}
