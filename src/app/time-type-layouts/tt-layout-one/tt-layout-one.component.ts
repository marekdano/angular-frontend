import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'tt-layout-one',
  templateUrl: './tt-layout-one.component.html',
  styleUrls: ['./tt-layout-one.component.scss']
})
export class TtLayoutOneComponent implements OnInit, OnDestroy {
  fileTypes: SelectItem[] = [];
  filterConditions: SelectItem[] = [];
  selectedRowFilters: any;

  @Input('form-group-level-4') configForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log("TtLayoutOne Component was initialized.");
    this.selectedRowFilters = false
  }

  ngOnDestroy() {
    console.log("TtLayoutOne Component was initialized.");
  }

  onRowFiltersChange(event) {
    console.log("Row Filters selected.");
    // "event" is always true OR false
    this.selectedRowFilters = event;
  }

}
