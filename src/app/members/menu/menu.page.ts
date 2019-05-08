import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title:'Inicio',
      url:'/members/menu/inicio',
      icon: 'home'
    },
    {
      title:'Búsqueda',
      url:'/members/menu/busqueda',
      icon: 'search'
    },
    {
      title:'Perfil',
      url:'/members/menu/perfil',
      icon: 'person'
    },
    {
      title:'Mis Áreas Favoritas',
      url:'/members/menu/areas',
      icon: 'star'
    },
    {
      title:'Comunidades',
      url:'/members/menu/comunidades',
      icon: 'people'
    },
    {
      title:'Información',
      url:'/members/menu/informacion',
      icon: 'information'
    },
    {
      title:'Estadísticas',
      children: [
        {
          title:'Comunidades Provincia',
          url:'/members/menu/provincia',
          icon: 'stats'
        },
        {
          title:'Reportes de Servicios',
          url:'/members/menu/servicios',
          icon: 'stats'
        },
        {
          title:'Reportes de Seguridad',
          url:'/members/menu/seguridad',
          icon: 'stats'
        },
        {
          title:'Estadística Sexo',
          url:'/members/menu/sexo',
          icon: 'stats'
        },
        {
          title:'Estadística Tiempo',
          url:'/members/menu/tiempo',
          icon: 'stats'
        }
      ]
    }
    
  ];
  selectedPath='';
  constructor(private router : Router, private authService: AuthenticationService) { 
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event&&event.url){
        this.selectedPath = event.url;
      }
    });
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit() {
  }

}
