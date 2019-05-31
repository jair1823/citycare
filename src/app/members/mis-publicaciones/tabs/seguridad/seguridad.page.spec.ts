import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadPage } from './seguridad.page';

describe('SeguridadPage', () => {
  let component: SeguridadPage;
  let fixture: ComponentFixture<SeguridadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
