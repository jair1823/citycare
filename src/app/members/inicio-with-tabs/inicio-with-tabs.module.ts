import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InicioWithTabsPage } from './inicio-with-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: InicioWithTabsPage,
    children: [
      { 
        path: 'noticias', 
        loadChildren: '../tabs-inicio/noticias/noticias.module#NoticiasPageModule' 
      },
      { 
        path: 'seguridad', 
        loadChildren: '../tabs-inicio/seguridad/seguridad.module#SeguridadPageModule' 
      },
      { 
        path: 'servicios',
        loadChildren: '../tabs-inicio/servicios/servicios.module#ServiciosPageModule' 
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
  declarations: [InicioWithTabsPage]
})
export class InicioWithTabsPageModule {}
