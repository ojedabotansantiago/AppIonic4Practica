import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: ActivatedRoute) {}
  ionViewWillEnter() {
    this.route.params.pipe(pluck('isLogin')).subscribe(arg => {});
  }
}
