import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { TimeUnitService } from '../../time-unit/time-unit.service';
import { FrequencyService } from '../../frequency/frequency.service';

import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'tt-layout-four',
  templateUrl: './tt-layout-four.component.html',
  styleUrls: ['./tt-layout-four.component.scss']
})
export class TtLayoutFourComponent implements OnInit, OnDestroy {
  timeUnits: SelectItem[] = [];
  frequencies: SelectItem[] = [];
  errorMessage: string;
  msgs: Message[] = [];

  lookupTimeUnits$: any;
  lookupFrequencies$: any;

  @Input('form-group-level-4') configForm: FormGroup;
  
  constructor(private timeUnitService: TimeUnitService,
              private frequencyService: FrequencyService,
              private fb: FormBuilder) { }

  ngOnInit() {
    console.log("TtLayoutFour Component was initialized.");
    this.timeUnits.push({ label: "Select Time Unit", value: null });
    this.frequencies.push({ label: "Select Frequency", value: null });

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
            this.frequencies.push({ label: freq['Description'], value: freq['PeriodValue'] });
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
    console.log("TtLayoutFour component was destroyed.");
    this.lookupTimeUnits$.unsubscribe(); 
    this.lookupFrequencies$.unsubscribe();
  }

  initPeriodicTimeDefinition(): FormGroup {
    return this.fb.group({
      FrequencyId: [null, Validators.required],
      OffsetInSeconds: [null, Validators.pattern("[0-9]*")],
      ResetTimeUnitId: [null]
    });
  }

}
