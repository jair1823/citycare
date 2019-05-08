import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'noticias', loadChildren: './tabs-areas/noticias/noticias.module#NoticiasPageModule' },
  { path: 'seguridad', loadChildren: './tabs-areas/seguridad/seguridad.module#SeguridadPageModule' },
  { path: 'servicios', loadChildren: './tabs-areas/servicios/servicios.module#ServiciosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes/*, { preloadingStrategy: PreloadAllModules }*/)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
