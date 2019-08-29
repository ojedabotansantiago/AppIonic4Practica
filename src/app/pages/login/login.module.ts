import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { TranslateModule } from '@ngx-translate/core';
import { LoginWithEmailComponent } from '../../components/loginComponents/login-with-email/login-with-email.component';
import { RegisterWithEmailComponent } from '../../components/loginComponents/register-with-email/register-with-email.component';
import { SharedModule } from '../../components/shared.modules';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [LoginWithEmailComponent, RegisterWithEmailComponent],
  declarations: [LoginPage, LoginWithEmailComponent, RegisterWithEmailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule {}
