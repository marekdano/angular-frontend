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
  errorMessage: string;
  msgs: Message[] = [];
  
  lookupConditions$: any;
  
  @Input('form-group-level-4') configForm: FormGroup;
  @Input('data-sources') dataSources: SelectItem[];
  @Input('tags') tags: SelectItem[];

  constructor(private conditionService: ConditionService) { }

  ngOnInit() {
    console.log("TtLayoutSix Component was initialized.");
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
  }

  ngOnDestroy() {
    console.log("TtLayoutSix Component was destroyed.");
    this.lookupConditions$.unsubscribe();
  }
  
}
