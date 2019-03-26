import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryfyEmailPage } from './veryfy-email.page';

describe('VeryfyEmailPage', () => {
  let component: VeryfyEmailPage;
  let fixture: ComponentFixture<VeryfyEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryfyEmailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryfyEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
