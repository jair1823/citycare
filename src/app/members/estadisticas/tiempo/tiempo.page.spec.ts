import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoPage } from './tiempo.page';

describe('TiempoPage', () => {
  let component: TiempoPage;
  let fixture: ComponentFixture<TiempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
