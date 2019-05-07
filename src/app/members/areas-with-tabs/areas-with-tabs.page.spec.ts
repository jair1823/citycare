import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasWithTabsPage } from './areas-with-tabs.page';

describe('AreasWithTabsPage', () => {
  let component: AreasWithTabsPage;
  let fixture: ComponentFixture<AreasWithTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasWithTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasWithTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
