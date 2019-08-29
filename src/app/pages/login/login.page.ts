import { Component, OnInit } from '@angular/core';
import { GlobalVarsService } from 'src/app/services/global-vars/global-vars.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public isLoginGoogle: boolean = true;
  public isBackButtonEnabled: boolean = false;
  public breadCums: string;
  constructor(private gVars: GlobalVarsService, private router: Router, private menu: MenuController, private auth: AuthService) {
    this.breadCums = 'Login';
  }

  public login(loginMethodOption: string): void {
    this.doLogin(loginMethodOption);
  }
  public checkIsLoginGoogle(isLogin) {
    console.log(isLogin);
    this.isLoginGoogle = isLogin;
  }
  public LoginWithEmailComponent(): any {
    this.isLoginGoogle = false;
  }

  public getLoginDataForm(loginDataForm) {
    console.log(loginDataForm);
  }
  private doLogin(loginMethodOption: string): any {
    if (loginMethodOption === 'email') {
      this.LoginWithEmailComponent();
      return;
    }
    this.auth
      .browserLogin(loginMethodOption)
      .then(res => {
        this.gVars.userData = res;
        this.confirmLogin(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
  private confirmLogin(res: any) {
    console.log(res);
    GlobalVarsService.isLogin = true;
    this.menu.enable(GlobalVarsService.isLogin);
    console.log(GlobalVarsService.isLogin);
    this.router.navigate(['/home', GlobalVarsService.isLogin]);
  }
}
