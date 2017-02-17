import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'

import { QueryTypeService } from '../../query-type/query-type.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'tt-layout-two',
  templateUrl: './tt-layout-two.component.html',
  styleUrls: ['./tt-layout-two.component.scss']
})
export class TtLayoutTwoComponent implements OnInit, OnDestroy {
  queryTypes: SelectItem[] = [];
  errorMessage: string;
  msgs: Message[] = [];
  lookupQueryTypes$: any;

  @Input('form-group-level-4') configForm: FormGroup;

  constructor(private queryTypeService: QueryTypeService) { }

  ngOnInit() {
    console.log("TtLayoutTwo Component was initialized.");
    this.queryTypes.push({ label: 'Select Query Type', value: null });

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
    console.log("TtLayoutTwo Component was destroyed.");
    this.lookupQueryTypes$.unsubscribe();
  }

}
