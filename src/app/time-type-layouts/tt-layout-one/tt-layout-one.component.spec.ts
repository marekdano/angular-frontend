/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TtLayoutOneComponent } from './tt-layout-one.component';

describe('TtLayoutOneComponent', () => {
  let component: TtLayoutOneComponent;
  let fixture: ComponentFixture<TtLayoutOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtLayoutOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtLayoutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
