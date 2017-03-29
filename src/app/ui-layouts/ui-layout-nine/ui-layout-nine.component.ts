import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AttributePropertyService } from '../../attribute-property/attribute-property.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-nine',
  templateUrl: './ui-layout-nine.component.html',
  styleUrls: ['./ui-layout-nine.component.scss']
})
export class UiLayoutNineComponent implements OnInit, OnDestroy {
  attributeProperties: SelectItem[] = [];
  errorMessage: string;
  msgs: Message[] = []; 
  lookupAttributeProperties$: any;

  @Input('form-group-level-3') configForm: FormGroup;

  constructor(private fb: FormBuilder,
              private attributePropertyService: AttributePropertyService) { }

  ngOnInit() {
    console.log("UiLayoutNine Component was initialized.");
    this.attributeProperties.push({ label: "Select Attributes", value: null });

    this.lookupAttributeProperties$ = this.attributePropertyService.getAllAttributeProperties()
      .subscribe(
        properties => {
          properties.forEach(property => {
            this.attributeProperties.push({ label: property['AttributeName'], value: property['AttributePropertyKey'] });
          })
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );
  }

  ngOnDestroy() {
    console.log("UiLayoutNine component was destroyed.");
    this.lookupAttributeProperties$.unsubscribe(); 
  }

}


