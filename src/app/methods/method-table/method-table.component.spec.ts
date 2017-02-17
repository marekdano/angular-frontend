/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MethodTableComponent } from './method-table.component';

describe('MethodTableComponent', () => {
  let component: MethodTableComponent;
  let fixture: ComponentFixture<MethodTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
