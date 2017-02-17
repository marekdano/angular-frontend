/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiLayoutFiveComponent } from './ui-layout-five.component';

describe('UiLayoutFiveComponent', () => {
  let component: UiLayoutFiveComponent;
  let fixture: ComponentFixture<UiLayoutFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLayoutFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLayoutFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
