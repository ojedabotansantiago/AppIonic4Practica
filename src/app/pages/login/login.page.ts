import { Component, OnInit } from '@angular/core';
import { GlobalVarsService } from 'src/app/services/global-vars/global-vars.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private gVars: GlobalVarsService, private router: Router, private menu: MenuController) {}

  public login(params: any) {
    GlobalVarsService.isLogin = true;
    this.menu.enable(GlobalVarsService.isLogin);
    console.log(GlobalVarsService.isLogin);
    this.router.navigate(['/home', GlobalVarsService.isLogin]);
  }
}
