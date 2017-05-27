import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { TimeConfigTypeService } from '../../time-config-type/time-config-type.service';
import { QueryTypeService } from '../../query-type/query-type.service';
import { HelperMethodService } from '../../shared/helper-methods.service';
import { timeTypeLayout1, timeTypeLayout2, timeTypeLayout3, timeTypeLayout4, timeTypeLayout5, timeTypeLayout6 } from '../../shared/layouts-enum';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-five',
  templateUrl: './ui-layout-five.component.html',
  styleUrls: ['./ui-layout-five.component.scss']
})
export class UiLayoutFiveComponent implements OnInit {
  queryTypes: SelectItem[] = [];
  timeTypes: SelectItem[] = [];
  selectedTimeTypeId: number;
  errorMessage: string;
  msgs: Message[] = [];
  lookupTimeConfigTypes$: any;
  lookupQueryTypes$: any;

  @Input('form-group-level-3') configForm: FormGroup;
  @Input('data-sources') dataSources: SelectItem[];
  @Input('tags') tags: SelectItem[];

  constructor(private fb: FormBuilder,
              private timeConfigTypeService: TimeConfigTypeService,
              private queryTypeService: QueryTypeService) { }

  ngOnInit() {
    console.log("UiLayoutFive Component was initialized.");
    this.queryTypes.push({ label: 'Select Query Type', value: null });

    this.lookupTimeConfigTypes$ = this.timeConfigTypeService.getAllTimeConfigTypes()
      .subscribe(
        timeTypes => {
          this.timeTypes = timeTypes.map((type):SelectItem => {
            return { label: type['Name'], value: type['Id'] }
          });
          this.timeTypes.unshift({ label: 'Select Time Type', value: null });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );

    this.lookupQueryTypes$ = this.queryTypeService.getAllQueryTypes()
      .subscribe(
        queryTypes => {
          queryTypes.forEach(type => {
            this.queryTypes.push({ label: type['Type'], value: type['Id'] });
          });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
  }

  ngOnDestroy() {
    console.log("UiLayoutFive component was destroyed");
    this.lookupTimeConfigTypes$.unsubscribe();
    this.lookupQueryTypes$.unsubscribe(); 
  }

  onTimeTypeChange(value, configForm) {
    this.selectedTimeTypeId = value;
    HelperMethodService.setTimeConfig(this, value, configForm);
  }

}
