import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.scss']
})
export class LoginWithEmailComponent implements OnChanges {
  @Input() isLoginWithGoogle: boolean;
  @Output() loginDataForm;
  constructor() {}
  // TODO: AVERIGUAR EL OUTPUT
  ngOnChanges() {
    console.log('login email compomnent');
    console.log(this.isLoginWithGoogle);
  }

  public backLogin() {
    this.isLoginWithGoogle = true;
  }
}
