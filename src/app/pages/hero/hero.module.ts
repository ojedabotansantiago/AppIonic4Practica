import { HeroesComponent } from './../../components/heroes/heroes.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeroPage } from './hero.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: HeroPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), TranslateModule],
  entryComponents: [HeroesComponent],
  declarations: [HeroPage, HeroesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroPageModule {}
