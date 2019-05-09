import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  informacion = [
    {
      nombre: 'Bomberos',
      telefono: '2435-4837',
      descripcion: 'Brindamos servicios de prevención y protección para salvaguardar la vida, los bienes y el medio ambiente.'
    },
    {
      nombre: 'Policía',
      telefono: '2435-4837',
      descripcion: 'Seguridad ante todo,'
    },
    {
      nombre: 'OIJ',
      telefono: '2435-4837',
      descripcion: 'Organismo de Invesigación Judicial'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
