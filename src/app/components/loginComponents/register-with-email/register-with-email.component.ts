import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service/auth.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register-with-email',
  templateUrl: './register-with-email.component.html',
  styleUrls: ['./register-with-email.component.scss'],
})
export class RegisterWithEmailComponent implements OnInit {
  private user = {
    email: '',
    pwd: '',
  };
  goto: string = 'login';
  registerNewUserForm = this.fb.group({
    email: [this.user.email, Validators.compose([Validators.required, Validators.minLength(4)])],
    pwd: [this.user.pwd, Validators.compose([Validators.required, Validators.minLength(4)])],
  });
  constructor(private fb: FormBuilder, private auth: AuthService, public modalController: ModalController) {}

  ngOnInit() {}

  public bakToLoginHome() {
    this.modalController.dismiss('no quiere hacer login');
  }
  public registerWithEmail() {
    const userData = {
      email: this.registerNewUserForm.get('email'),
      pwd: this.registerNewUserForm.get('pwd'),
    };
    console.log(userData);
  }
}
