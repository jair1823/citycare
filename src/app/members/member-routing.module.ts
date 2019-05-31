import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'noticias', loadChildren: './mis-publicaciones/tabs/noticias/noticias.module#NoticiasPageModule' },
  { path: 'seguridad', loadChildren: './mis-publicaciones/tabs/seguridad/seguridad.module#SeguridadPageModule' },
  { path: 'servicios', loadChildren: './mis-publicaciones/tabs/servicios/servicios.module#ServiciosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
