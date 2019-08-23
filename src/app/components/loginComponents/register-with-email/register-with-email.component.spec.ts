import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithEmailPage } from './register-with-email.page';

describe('RegisterWithEmailPage', () => {
  let component: RegisterWithEmailPage;
  let fixture: ComponentFixture<RegisterWithEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithEmailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
