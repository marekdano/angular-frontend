import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'

import { ConditionService } from '../../condition/condition.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { QueryTypeService } from '../../query-type/query-type.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'tt-layout-three',
  templateUrl: './tt-layout-three.component.html',
  styleUrls: ['./tt-layout-three.component.scss']
})
export class TtLayoutThreeComponent implements OnInit, OnDestroy {
  conditions: SelectItem[] = [];
  dataSources: SelectItem[] = [];
  queryTypes: SelectItem[] = [];
  errorMessage: string;
  msgs: Message[] = [];

  lookupQueryTypes$: any;
  lookupConditions$: any;
  lookupDataSources$: any;

  @Input('form-group-level-4') configForm: FormGroup;

  constructor(private conditionService: ConditionService,
              private dataSourceNamesService: DataSourceNamesService,
              private queryTypeService:  QueryTypeService) { }

  ngOnInit() {
    console.log("TtLayoutThree Component was initialized.");
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

    this.lookupQueryTypes$ = this.queryTypeService.getAllQueryTypes()
      .subscribe(
        queryTypes => {
          this.queryTypes.push({ label: "Select or Type...", value: null });
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
    console.log("TtLayoutThree Component was destroyed.");
    this.lookupConditions$.unsubscribe();
    this.lookupDataSources$.unsubscribe();
    this.lookupQueryTypes$.unsubscribe();
  }

}
