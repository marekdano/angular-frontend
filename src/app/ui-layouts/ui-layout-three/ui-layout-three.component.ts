import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HelperMethodService } from '../../shared/helper-methods.service';
import { timeTypeLayout1, timeTypeLayout2, timeTypeLayout3, timeTypeLayout4, timeTypeLayout5, timeTypeLayout6 } from '../../shared/layouts-enum';
import { TimeConfigTypeService } from '../../time-config-type/time-config-type.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-three',
  templateUrl: './ui-layout-three.component.html',
  styleUrls: ['./ui-layout-three.component.scss']
})
export class UiLayoutThreeComponent implements OnInit, OnDestroy {
  timeTypes: SelectItem[] = [];
  selectedTimeTypeId: number;
  calculationTypeId: number;
  errorMessage: string;
  msgs: Message[] = [];
  
  lookupTimeConfigTypes$: any;

  @Input('form-group-level-3') configForm: FormGroup;
  @Input('data-sources') dataSources: SelectItem[];
  @Input('tags') tags: SelectItem[];

  constructor(private fb: FormBuilder,
              private timeConfigTypeService: TimeConfigTypeService) { }

  ngOnInit() {
    console.log("UiLayoutThree Component was initialized.");
    this.calculationTypeId = this.configForm.controls['CalculationTypeId'].value;
  
    this.lookupTimeConfigTypes$ = this.timeConfigTypeService.getAllTimeConfigTypes()
      .subscribe(
        timeTypes => {
          this.timeTypes = timeTypes.map((type):SelectItem => {
            return { label: type['Name'], value: type['Id'] }
          });
          // add it as a first element
          this.timeTypes.unshift({ label: 'Select Time Type', value: null });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
  }

  ngOnDestroy() {
    console.log("UiLayoutThree component was destroyed");
    this.lookupTimeConfigTypes$.unsubscribe();
  }

  onTimeTypeChange(value: number, configForm: FormGroup, insideOfEndTimeConfig: boolean = false) {
    this.selectedTimeTypeId = value;
    HelperMethodService.setTimeConfig(this, value, configForm, this.calculationTypeId, insideOfEndTimeConfig);
  }

}
