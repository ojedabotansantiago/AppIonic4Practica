import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { ListPage } from './list.page';
const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [],
  declarations: [ListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListPageModule {}
