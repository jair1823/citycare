import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoggedGuard } from './services/guards/logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate:[LoggedGuard],
    loadChildren: './public/login/login.module#LoginPageModule'
  },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  {
    path: 'members',
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
