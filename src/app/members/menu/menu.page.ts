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
      url:'/members/menu/inicio'
    },
    {
      title:'Búsqueda',
      url:'/members/menu/busqueda'
    },
    {
      title:'Perfil',
      url:'/members/menu/perfil'
    },
    {
      title:'Mis Áreas Favoritas',
      url:'/members/menu/areas'
    },
    {
      title:'Comunidades',
      url:'/members/menu/comunidades'
    },
    {
      title:'Información',
      url:'/members/menu/informacion'
    },
    {
      title:'Estadísticas',
      url:'/members/menu/estadisticas'
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
