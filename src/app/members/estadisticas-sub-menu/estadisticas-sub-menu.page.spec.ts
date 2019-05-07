import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasSubMenuPage } from './estadisticas-sub-menu.page';

describe('EstadisticasSubMenuPage', () => {
  let component: EstadisticasSubMenuPage;
  let fixture: ComponentFixture<EstadisticasSubMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasSubMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasSubMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
