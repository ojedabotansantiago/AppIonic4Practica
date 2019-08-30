import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() breadCums: string;
  @Input() subHeader?: string = undefined;
  @Input() isBackButtonEnabled: boolean;
  @Input() isMenuButtonEnabled: boolean = false;
  @Input() goTo: string;
  @Output() backButtonPushed = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {
    console.log(this.isBackButtonEnabled);
    console.log(this.isMenuButtonEnabled);
  }
  ngOnChanges() {
    console.log(this.isBackButtonEnabled);
    console.log(this.isMenuButtonEnabled);
  }
  goBack() {
    this.backButtonPushed.emit('go to back page');
    console.log(event);
  }
}
