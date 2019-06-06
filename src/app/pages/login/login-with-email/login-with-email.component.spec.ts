import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithEmailPage } from './login-with-email.page';

describe('LoginWithEmailPage', () => {
  let component: LoginWithEmailPage;
  let fixture: ComponentFixture<LoginWithEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithEmailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
