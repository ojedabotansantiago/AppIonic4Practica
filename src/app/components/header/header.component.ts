import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() breadCums: string;
  @Input() subHeader?: string = undefined;
  @Input() isBackButtonEnabled: boolean;
  @Input() goTo: string;
  @Output() backButtonPushed = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}

  goBack (event) {
    this.backButtonPushed.emit('go to back page');
    console.log(event);
  }
}
