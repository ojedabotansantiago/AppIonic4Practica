import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPage } from './observables.page';

describe('ObservablesPage', () => {
  let component: ObservablesPage;
  let fixture: ComponentFixture<ObservablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
