import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
  },
  {
    path: 'hero-detail',
    loadChildren: './pages/hero-detail/hero-detail.module#HeroDetailPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, TranslateModule],
})
export class AppRoutingModule {}
