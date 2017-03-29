import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Container } from '../../containers/container.interface';

@Component({
  selector: 'app-method-table',
  templateUrl: './method-table.component.html',
  styleUrls: ['./method-table.component.scss']
})
export class MethodTableComponent implements OnInit, OnDestroy {
  errorMessage: string;
  containers: Container[];
  configForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.configForm = this.fb.group({
      ContainerTypeName: this.fb.control(""),
      ContainerName: this.fb.control("")
    });
  }

  ngOnDestroy() {
  }

  onSubmit(value) {
    console.log("ConfigForm value:", this.containers);
  }

}
