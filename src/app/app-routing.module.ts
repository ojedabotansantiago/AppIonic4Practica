import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full',
  },
  {
    path: 'hero',
    loadChildren: './pages/hero/hero.module#HeroPageModule',
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
