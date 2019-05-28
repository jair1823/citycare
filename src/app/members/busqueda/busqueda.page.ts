import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'
import { HttpGetdataDbService } from 'src/app/services/http-getdata-db.service';
declare var google;
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  reports: any;
  map = null;
  crUbication = {
    lat: 9.7489166,
    lng: -83.7534256
  };
  constructor(
    private loadCtrl: LoadingController,
    private http: HttpGetdataDbService
  ) { }

  ngOnInit() {
    this.loadMap();
  }

  get_all_reports() {
    this.http.select_reports_busqueda().subscribe((res) => {
      this.reports = res;
      console.log(this.reports);
      this.add_reports();
    }, (error) => {
      console.log(error);
    });
  }

  add_reports() {
    for (let index = 0; index < this.reports.length; index++) {
      const element = this.reports[index];
      this.addMarker(
        element
      );
    }
  }

  async loadMap() {
    const loading = await this.loadCtrl.create();
    loading.present();

    const mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: this.crUbication,
      zoom: 8
    });
    google.maps.event
      .addListenerOnce(this.map, 'idle', () => {
        loading.dismiss();
        this.get_all_reports();
      });

  }

  addMarker(info) {
    const pos = {
      lat: +info.latitud,
      lng: +info.longitud
    }
    const icon = {
      url: '../../assets/icon/'+info.multimedia_path,
      scaledSize: new google.maps.Size(20, 27)
    };
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: 'hello word!',
      icon: icon
    });
    const contentStyle = 
      "<h2>"+info.tipo+"</h2>"+"<br>"+
      "<b>Fecha y Hora: </b>"+info.date+" "+info.time+"<br>"+
      "<b>Descripción: </b>"+info.description;
    const infoWindow = new google.maps.InfoWindow({
      content: contentStyle,
      maxWidth: 1000,
      maxHeight: 1000
    });
    marker.addListener('click', function () {
      infoWindow.open(this.map, marker);
    });
  }

}
