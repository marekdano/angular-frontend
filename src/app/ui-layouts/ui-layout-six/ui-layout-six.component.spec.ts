/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiLayoutSixComponent } from './ui-layout-six.component';

describe('UiLayoutSixComponent', () => {
  let component: UiLayoutSixComponent;
  let fixture: ComponentFixture<UiLayoutSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLayoutSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLayoutSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
