import { Component, OnInit, OnDestroy, Input } from '@angular/core';
//import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { FileTypeService } from '../../file-type/file-type.service';
import { HelperMethodService } from '../../shared/helper-methods.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-eight',
  templateUrl: './ui-layout-eight.component.html',
  styleUrls: ['./ui-layout-eight.component.scss']
})
export class UiLayoutEightComponent implements OnInit, OnDestroy {
  fileTypes: SelectItem[] = [];
  filterConditions: SelectItem[] = [];
  errorMessage: string;
  msgs: Message[] = [];
  selectedRowFilters: any;
  
  lookupFileTypes$: any;

  constructor(private fileTypeService: FileTypeService) { }

  ngOnInit() {
    console.log("UiLayoutEightComponent was initialized.");
    this.selectedRowFilters = false
    this.fileTypes.push({ label: 'Select File Type', value: null });

    this.lookupFileTypes$ = this.fileTypeService.getAllFileTypes()
      .subscribe(
        fileTypes => {
          fileTypes.forEach(type => {
            this.fileTypes.push({ label: type['Name'], value: type['Id'] });
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
    console.log("UiLayoutEightComponent was destroyed.");
    this.lookupFileTypes$.unsubscribe();
  }

  onRowFiltersChange(event) {
    console.log("Row Filters selected.");
    // "event" is always true OR false
    this.selectedRowFilters = event;
  }

}
