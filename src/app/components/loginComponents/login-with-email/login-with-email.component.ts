import { Component, Output, OnInit, NgModule, Input, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RegisterWithEmailComponent } from '../register-with-email/register-with-email.component';

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.scss'],
})
@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  entryComponents: [],
  declarations: [],
})
export class LoginWithEmailComponent implements OnInit {
  @Output() isLoginWithGoogle = new EventEmitter<boolean>();
  @Output() loginDataForm = new EventEmitter<{}>();
  user = {
    email: '',
    pwd: '',
  };
  loginForm = this.fb.group({
    email: [this.user.email, Validators.compose([Validators.required, Validators.minLength(4)])],
    pwd: [this.user.pwd, Validators.compose([Validators.required, Validators.minLength(4)])],
  });

  constructor(private auth: AuthService, private fb: FormBuilder, public modalController: ModalController) {}

  ngOnInit() {}

  public doLogin() {
    const userData = {
      email: this.loginForm.get('email'),
      pwd: this.loginForm.get('pwd'),
    };
    this.loginWithEmailAndPwd(userData);
  }
  public async registerWithEmail(): Promise<void> {
    const modal = await this.modalController.create({
      component: RegisterWithEmailComponent,
    });
    const data = modal.onDidDismiss();
    data.then(res => {
      this.backLogin();
    });
    return await modal.present();
  }
  public loginWithEmailAndPwd(userData) {
    this.auth
      .loginWithEmailAndPwd(userData)
      .then(res => {})
      .catch(err => console.log(err));
    this.loginDataForm.emit(userData);
  }

  public backLogin() {
    console.log(this.isLoginWithGoogle);
    this.isLoginWithGoogle.emit(true);
  }
}
