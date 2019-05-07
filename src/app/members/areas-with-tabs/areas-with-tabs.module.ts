import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AreasWithTabsPage } from './areas-with-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AreasWithTabsPage,
    children: [
      { 
        path: 'noticias', 
        loadChildren: '../tabs-areas/noticias/noticias.module#NoticiasPageModule' 
      },
      { 
        path: 'seguridad', 
        loadChildren: '../tabs-areas/seguridad/seguridad.module#SeguridadPageModule' 
      },
      { 
        path: 'servicios',
        loadChildren: '../tabs-areas/servicios/servicios.module#ServiciosPageModule' 
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
  declarations: [AreasWithTabsPage]
})
export class AreasWithTabsPageModule {}
