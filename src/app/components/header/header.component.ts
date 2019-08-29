import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
@NgModule({
  imports: [],
  entryComponents: [],
  declarations: [],
})
export class HeaderComponent implements OnInit {
  @Input() breadCums: string;
  @Input() subHeader: string;
  @Input() isBackButtonEnabled: boolean;

  constructor() {}
  ngOnInit() {}
}
