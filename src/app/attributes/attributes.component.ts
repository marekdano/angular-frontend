import { Component, OnInit, OnDestroy, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit, OnDestroy {
  selectedAttribute: boolean = false;
  selectedAttributeId: any;
  
  @Input('form-group-level-1') configForm: FormGroup;
  @Input('container-selected-method') containerSelectedMethod: Object;
  
  constructor() { }

  ngOnInit() {
    console.log("AttributesComponent was initialized.");
  }

  ngOnDestroy() {
    console.log("AttributesComponent was destroyed.")
  }

  callAttribute(index) {
    this.selectedAttribute = true;
    this.selectedAttributeId = index;
  }

}
