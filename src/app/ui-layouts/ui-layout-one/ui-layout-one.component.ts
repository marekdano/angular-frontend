import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { TimeConfigTypeService } from '../../time-config-type/time-config-type.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { TagService } from '../../tag/tag.service';
import { HelperMethodService } from '../../shared/helper-methods.service';
import { timeTypeLayout1, timeTypeLayout2, timeTypeLayout3, timeTypeLayout4, timeTypeLayout5, timeTypeLayout6 } from '../../shared/layouts-enum'; 
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-one',
  templateUrl: './ui-layout-one.component.html',
  styleUrls: ['./ui-layout-one.component.scss']
})
export class UiLayoutOneComponent implements OnInit, OnDestroy {
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
    console.log("UiLayoutOneComponent was initialized.");
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
    console.log("UiLayoutOne component was destroyed");
    this.lookupTimeConfigTypes$.unsubscribe();
  }

  onTimeTypeChange(numberValue: number, configForm: FormGroup, insideOfEndTimeConfig: boolean = false) {
    this.selectedTimeTypeId = numberValue;
    HelperMethodService.setTimeConfig(this, numberValue, configForm, this.calculationTypeId, insideOfEndTimeConfig);
  }

}
