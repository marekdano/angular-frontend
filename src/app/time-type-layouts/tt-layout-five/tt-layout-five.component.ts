import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ConditionService } from '../../condition/condition.service';
import { TimeUnitService } from '../../time-unit/time-unit.service';
import { FrequencyService } from '../../frequency/frequency.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { TagService } from '../../tag/tag.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'tt-layout-five',
  templateUrl: './tt-layout-five.component.html',
  styleUrls: ['./tt-layout-five.component.scss']
})
export class TtLayoutFiveComponent implements OnInit, OnDestroy {
  conditions: SelectItem[] = [];
  timeUnits: SelectItem[] = [];
  frequencies: SelectItem[] = [];
  selectedCondition: number;
  errorMessage: string;
  msgs: Message[] = [];

  lookupConditions$: any;
  lookupTimeUnits$: any;
  lookupFrequencies$: any;

  @Input('form-group-level-4') configForm: FormGroup;
  @Input('data-sources') dataSources: SelectItem[];
  @Input('tags') tags: SelectItem[];

  constructor(private conditionService: ConditionService,
              private timeUnitService: TimeUnitService,
              private frequencyService: FrequencyService) { }

  ngOnInit() {
    console.log("TtLayoutFiveComponent was initialized.");
  
    this.conditions.push({ label:'Select Condition', value: null });
    this.timeUnits.push({ label: "Select Time Unit", value: null });
    this.frequencies.push({ label: "Select Frequency", value: null });

    this.lookupConditions$ = this.conditionService.getAllConditions()
      .subscribe(
        conditions => {
          conditions.forEach(condition => {
            this.conditions.push({ label: condition['Name'], value: condition['Id'] });
          });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );

    this.lookupTimeUnits$ = this.timeUnitService.getAllTimeUnits()
      .subscribe(
        timeUnits => {
          timeUnits.forEach(timeUnit => {
            this.timeUnits.push({ label: timeUnit['Name'], value: timeUnit['Id'] });
          })
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );

    this.lookupFrequencies$ = this.frequencyService.getAllFrequencies()
      .subscribe(
        frequencies => {
          frequencies.forEach(freq => {
            this.frequencies.push({ label: freq['Description'], value: freq['Id'] });
          })
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );
  }

  ngOnDestroy(): void {
    console.log("TtLayoutFive component was destroyed.");
    this.lookupConditions$.unsubscribe();
    this.lookupTimeUnits$.unsubscribe(); 
    this.lookupFrequencies$.unsubscribe();
  }

  onConditionChanged(conditionId): void {
    this.selectedCondition = conditionId;
  }

}
