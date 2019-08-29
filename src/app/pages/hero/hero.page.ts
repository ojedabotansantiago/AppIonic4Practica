import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {
  public breadCums: string = 'Hero';
  public isBackButtonEnabled: boolean = true;
  public isMenuButtonEnabled: boolean = true;
  constructor() {}

  ngOnInit() {}
}
