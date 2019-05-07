import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioWithTabsPage } from './inicio-with-tabs.page';

describe('InicioWithTabsPage', () => {
  let component: InicioWithTabsPage;
  let fixture: ComponentFixture<InicioWithTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioWithTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioWithTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
