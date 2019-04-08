import { HeroClass } from './../../classes/hero-class/hero-class';
import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/classes/hero-class/hero-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  protected hero: HeroClass = {
    id: 1,
    name: 'My Hero',
  };
  protected heroes;
  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit() {}
}
