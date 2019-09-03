import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVarsService } from './services/global-vars/global-vars.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Hero',
      url: '/hero',
      icon: 'aperture',
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private router: Router,
    private menu: MenuController,
    private auth: AuthService
  ) {
    translate.setDefaultLang('es');
    translate.use('es');
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.menu.enable(false);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout() {
    this.auth.logout().then(_ => {
      GlobalVarsService.isLogin = false;
      this.router.navigate(['/login']);
      this.menu.enable(false);
    });
  }
}
