import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MisPublicacionesPage } from './mis-publicaciones.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MisPublicacionesPage,
    children: [
      {
        path: 'noticias',
        loadChildren: './tabs/noticias/noticias.module#NoticiasPageModule'
      },
      {
        path: 'seguridad',
        loadChildren: './tabs/seguridad/seguridad.module#SeguridadPageModule'
      },
      {
        path: 'servicios',
        loadChildren: './tabs/servicios/servicios.module#ServiciosPageModule'
      }
    ]
  },
  {
    path:'',
    redirectTo: 'tabs/noticias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MisPublicacionesPage]
})
export class MisPublicacionesPageModule { }
