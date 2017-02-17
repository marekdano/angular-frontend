import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HelperMethodService } from '../../shared/helper-methods.service';
import { timeTypeLayout1, timeTypeLayout2, timeTypeLayout3, timeTypeLayout4, timeTypeLayout5, timeTypeLayout6 } from '../../shared/layouts-enum';
import { TimeConfigTypeService } from '../../time-config-type/time-config-type.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { TagService } from '../../tag/tag.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-six',
  templateUrl: './ui-layout-six.component.html',
  styleUrls: ['./ui-layout-six.component.scss']
})
export class UiLayoutSixComponent implements OnInit, OnDestroy {
  timeTypes: SelectItem[] = [];
  dataSources: SelectItem[] = [];
  tags: SelectItem[] = [];
  selectedTimeTypeId: number;
  calculationTypeId: number;
  errorMessage: string;
  msgs: Message[] = [];
  lookupTimeConfigTypes$: any;
  lookupDataSources$: any;
  lookupTags$: any;

  @Input('form-group-level-3') configForm: FormGroup;

  constructor(private fb: FormBuilder,
              private timeConfigTypeService: TimeConfigTypeService,
              private dataSourceNamesService: DataSourceNamesService,
              private tagService: TagService) { }

  ngOnInit() {
    console.log("UiLayoutSixComponent was initialized.");
    this.calculationTypeId = this.configForm.controls['CalculationTypeId'].value;
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

      this.lookupTags$ = this.tagService.getAllTags()
      .subscribe(
        tags => {
          this.tags.push({ label: "Select or Type...", value: null });
          tags.forEach(tag => {
            this.tags.push({ label: tag['Name'], value: tag['Name'] });
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
    console.log("UiLayoutSix component was destroyed");
    this.lookupTimeConfigTypes$.unsubscribe();
    this.lookupDataSources$.unsubscribe(); 
    this.lookupTags$.unsubscribe();
  }

  onTimeTypeChange(value: number, configForm: FormGroup, insideOfEndTimeConfig: boolean = false) {
    console.log("TimeTypeID in onTimeTypeChange : ", value);
    this.selectedTimeTypeId = value;

    HelperMethodService.setTimeConfig(this, value, configForm, this.calculationTypeId, insideOfEndTimeConfig);
  }

}
