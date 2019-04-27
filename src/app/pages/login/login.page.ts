import { Component, OnInit } from '@angular/core';
import { GlobalVarsService } from 'src/app/services/global-vars/global-vars.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LoginWithEmailComponent } from 'src/app/components/login-with-email/login-with-email.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  public isLoginGoogle = true;
  constructor(
    private gVars: GlobalVarsService,
    private router: Router,
    private menu: MenuController,
    private platform: Platform,
    private auth: AuthService
  ) {}

  public login(loginMethodOption: string) {
    if (!this.platform.is('cordova')) {
      this.doLoginGoogle(loginMethodOption);
    }
  }

  private doLoginGoogle(loginMethodOption: string): any {
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
  LoginWithEmailComponent(): any {
    this.isLoginGoogle = false;
  }

  private confirmLogin(res: any) {
    console.log(res);
    GlobalVarsService.isLogin = true;
    this.menu.enable(GlobalVarsService.isLogin);
    console.log(GlobalVarsService.isLogin);
    this.router.navigate(['/home', GlobalVarsService.isLogin]);
  }
}
