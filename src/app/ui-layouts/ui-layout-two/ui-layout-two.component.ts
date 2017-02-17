import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HelperMethodService } from '../../shared/helper-methods.service';
import { timeTypeLayout1, timeTypeLayout2, timeTypeLayout3, timeTypeLayout4, timeTypeLayout5, timeTypeLayout6 } from '../../shared/layouts-enum';
import { TimeConfigTypeService } from '../../time-config-type/time-config-type.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-two',
  templateUrl: './ui-layout-two.component.html',
  styleUrls: ['./ui-layout-two.component.scss']
})
export class UiLayoutTwoComponent implements OnInit, OnDestroy {
  timeTypes: SelectItem[] = [];
  dataSources: SelectItem[] = [];
  selectedTimeTypeId: number;
  errorMessage: string;
  msgs: Message[] = [];
  lookupDataSources$: any;
  lookupTimeConfigTypes$: any;

  @Input('form-group-level-3') configForm: FormGroup;

  constructor(private fb: FormBuilder,
              private timeConfigTypeService: TimeConfigTypeService,
              private dataSourceNamesService: DataSourceNamesService) { }

  ngOnInit() {
    console.log("UiLayoutTwo Component was initialized.");
    this.timeTypes.push({ label: 'Select Time Type', value: null });
    
    this.lookupTimeConfigTypes$ = this.timeConfigTypeService.getAllTimeConfigTypes()
      .subscribe(
        timeTypes => {
          timeTypes.forEach(type => {
            this.timeTypes.push({ label: type['Name'], value: type['Id'] });
          });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
    
    this.lookupDataSources$ = this.dataSourceNamesService.getDataSourceNames()
      .subscribe(
        dataSourceNames => {
          this.dataSources.push({ label: "Select or Type...", value: null });
          dataSourceNames.forEach(source => {
            this.dataSources.push({ label: source, value: source });
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
    console.log("UiLayoutTwo component was destroyed");
    this.lookupTimeConfigTypes$.unsubscribe();
    this.lookupDataSources$.unsubscribe(); 
  }

  onTimeTypeChange(value, configForm) {
    console.log("TimeTypeID in onTimeTypeChange: ", value);
    this.selectedTimeTypeId = value;

    HelperMethodService.setTimeConfig(this, value, configForm);
  }


}
