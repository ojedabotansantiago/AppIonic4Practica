import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { TranslateModule } from '@ngx-translate/core';
import { LoginWithEmailComponent } from '../../components/loginComponents/login-with-email/login-with-email.component';
import { RegisterWithEmailComponent } from '../../components/loginComponents/register-with-email/register-with-email.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), TranslateModule, FormsModule, ReactiveFormsModule],
  entryComponents: [LoginWithEmailComponent, RegisterWithEmailComponent],
  declarations: [LoginPage, LoginWithEmailComponent, RegisterWithEmailComponent],
})
export class LoginPageModule {}
