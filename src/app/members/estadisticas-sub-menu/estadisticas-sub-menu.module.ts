import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstadisticasSubMenuPage } from './estadisticas-sub-menu.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasSubMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstadisticasSubMenuPage]
})
export class EstadisticasSubMenuPageModule {}
