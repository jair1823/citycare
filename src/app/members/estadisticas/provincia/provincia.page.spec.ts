import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaPage } from './provincia.page';

describe('ProvinciaPage', () => {
  let component: ProvinciaPage;
  let fixture: ComponentFixture<ProvinciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
