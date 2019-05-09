import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'inicio',
        loadChildren: '../inicio-with-tabs/inicio-with-tabs.module#InicioWithTabsPageModule'
      },
      {
        path: 'busqueda',
        loadChildren: '../busqueda/busqueda.module#BusquedaPageModule'
      },

      {
        path: 'perfil',
        loadChildren: '../perfil/perfil.module#PerfilPageModule'
      },
      {
        path: 'areas',
        loadChildren: '../areas-with-tabs/areas-with-tabs.module#AreasWithTabsPageModule'
      },
      {
        path: 'comunidades',
        loadChildren: '../comunidades/comunidades.module#ComunidadesPageModule'
      },
      {
        path: 'informacion',
        loadChildren: '../informacion/informacion.module#InformacionPageModule'
      },
      {
        path: 'estadisticas',
        loadChildren: '../estadisticas-sub-menu/estadisticas-sub-menu.module#EstadisticasSubMenuPageModule'
      },
      { path: 'provincia', 
        loadChildren: '../estadisticas/provincia/provincia.module#ProvinciaPageModule'
      },
      {
        path: 'seguridad',
        loadChildren: '../estadisticas/seguridad/seguridad.module#SeguridadPageModule'
      },
      { 
        path: 'servicios', 
        loadChildren: '../estadisticas/servicios/servicios.module#ServiciosPageModule' 
      },
      { 
        path: 'sexo', 
        loadChildren: '../estadisticas/sexo/sexo.module#SexoPageModule' 
      },
      { 
        path: 'tiempo', 
        loadChildren: '../estadisticas/tiempo/tiempo.module#TiempoPageModule' 
      },
      { 
        path: 'mis-publicaciones', 
        loadChildren: '../mis-publicaciones/mis-publicaciones.module#MisPublicacionesPageModule' 
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
