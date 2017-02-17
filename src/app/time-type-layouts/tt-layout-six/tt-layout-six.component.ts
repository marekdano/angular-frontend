import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ConditionService } from '../../condition/condition.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { TagService } from '../../tag/tag.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'tt-layout-six',
  templateUrl: './tt-layout-six.component.html',
  styleUrls: ['./tt-layout-six.component.scss']
})
export class TtLayoutSixComponent implements OnInit, OnDestroy {
  conditions: SelectItem[] = [];
  dataSources: SelectItem[] = [];
  tags: SelectItem[] = [];
  //selectedCondition: number
  errorMessage: string;
  msgs: Message[] = [];
  
  lookupConditions$: any;
  lookupDataSources$: any;
  lookupTags$: any;

  @Input('form-group-level-4') configForm: FormGroup;

  constructor(private conditionService: ConditionService,
              private dataSourceNamesService: DataSourceNamesService,
              private tagService: TagService) { }

  ngOnInit() {
    console.log("TtLayoutSix Component was initialized.");
    //this.selectedCondition = this.configForm.controls['TimeFromTagDefinition']['controls']['ConditionId'].value;
    this.conditions.push({ label:'Select Condition', value: null });

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
    console.log("TtLayoutSix Component was destroyed.");
    this.lookupConditions$.unsubscribe();
    this.lookupDataSources$.unsubscribe();
    this.lookupTags$.unsubscribe();
  }

  // onConditionChanged(conditionId) {
  //   console.log("Selected Condition: ", conditionId);
  //   this.selectedCondition = conditionId;
  // }
}
