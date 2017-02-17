/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TtLayoutFourComponent } from './tt-layout-four.component';

describe('TtLayoutFourComponent', () => {
  let component: TtLayoutFourComponent;
  let fixture: ComponentFixture<TtLayoutFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtLayoutFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtLayoutFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
