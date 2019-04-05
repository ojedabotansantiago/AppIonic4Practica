import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalVarsService } from './services/global-vars/global-vars.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: GlobalVarsService.isLogin ? 'home' : 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: GlobalVarsService.isLogin ? 'home' : 'login' },
  {
    path: 'hero',
    loadChildren: './pages/hero/hero.module#HeroPageModule',
  },
  {
    path: 'home/:isLogin',
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [GlobalVarsService.isLogin],
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [GlobalVarsService.isLogin],
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule',
    canActivate: [GlobalVarsService.isLogin],
  },
  {
    path: 'hero-detail',
    loadChildren: './pages/hero-detail/hero-detail.module#HeroDetailPageModule',
    canActivate: [GlobalVarsService.isLogin],
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
