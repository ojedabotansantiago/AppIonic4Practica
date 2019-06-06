import { Component, Input, Output, OnInit, NgModule } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { FormControl, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  @Input() isLoginWithGoogle: boolean;
  @Output() loginDataForm;
  user = {
    email: '',
    pwd: '',
  };
  loginForm = this.fb.group({
    email: [this.user.email, Validators.compose([Validators.required, Validators.minLength(4)])],
    pwd: [this.user.pwd, Validators.compose([Validators.required, Validators.minLength(4)])],
  });

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.delclareForm();
  }

  private delclareForm() {}

  public doLogin() {
    const userData = {
      email: this.loginForm.get('email'),
      pwd: this.loginForm.get('pwd'),
    };
    this.loginWithEmailAndPwd(userData);
  }

  public loginWithEmailAndPwd(userData) {
    this.auth.loginWithEmailAndPwd(userData);
  }

  public backLogin() {
    this.isLoginWithGoogle = true;
    console.log(this.isLoginWithGoogle);
  }
}
