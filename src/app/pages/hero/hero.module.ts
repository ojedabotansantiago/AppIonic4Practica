import { HeroesComponent } from './../../components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeroPage } from './hero.page';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterWithEmailComponent } from '../../components/loginComponents/register-with-email/register-with-email.component';

const routes: Routes = [
  {
    path: '',
    component: HeroPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), TranslateModule],
  entryComponents: [HeroesComponent, RegisterWithEmailComponent],
  declarations: [HeroPage, HeroesComponent, RegisterWithEmailComponent],
})
export class HeroPageModule {}
