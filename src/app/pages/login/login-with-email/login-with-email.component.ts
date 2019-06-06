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
  loginForm: FormGroup;
  user = {
    email: '',
    pwd: '',
  };
  email: any;
  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.delclareForm();
  }

  private delclareForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.user.email, [Validators.required, Validators.minLength(4)]),
      'pwd': new FormControl(this.user.pwd, [Validators.required, Validators.minLength(4)]),
    });
  }

  public doLogin() {
    console.log(this.loginForm);
  }

  public loginWithEmailAndPwd() {
    this.auth.loginWithEmailAndPwd(this.loginForm);
  }

  public backLogin() {
    this.isLoginWithGoogle = true;
    console.log(this.isLoginWithGoogle);
  }
}
