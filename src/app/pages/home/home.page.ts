import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public breadCums: string = 'Hero';
  public isBackButtonEnabled: boolean = true;
  public isMenuButtonEnabled: boolean = true;
  public subHeader: string ='Welcome app';
  constructor(private route: ActivatedRoute) {}
  ionViewWillEnter() {
    this.route.params.pipe(pluck('isLogin')).subscribe(arg => {
      console.log(`hellow `);
    });
  }
}
