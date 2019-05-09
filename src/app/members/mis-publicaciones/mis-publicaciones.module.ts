import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MisPublicacionesPage } from './mis-publicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisPublicacionesPage
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
export class MisPublicacionesPageModule {}
