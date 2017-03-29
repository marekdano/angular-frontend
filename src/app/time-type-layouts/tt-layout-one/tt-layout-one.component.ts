import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

import { FileTypeService } from '../../file-type/file-type.service';
import { ConditionService } from '../../condition/condition.service';
import { HelperMethodService } from '../../shared/helper-methods.service';
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
  errorMessage: string;
  msgs: Message[] = [];

  tabIndex: boolean = false;

  lookupFileTypes$: any;
  lookupConditions$: any;

  @Input('form-group-level-4') configForm: FormGroup;

  constructor(private fb: FormBuilder,
              private fileTypeService: FileTypeService,
              private conditionService: ConditionService) { }

  ngOnInit() {
    console.log("TtLayoutOne Component was initialized.");
    if(this.configForm.controls['TimeFromFileDefinition']['controls']['FilterByColumn'].value !== null) {
       this.selectedRowFilters = true;
       this.configForm.controls['TimeFromFileDefinition']['controls']['TempRowFilters'].patchValue(true);
    } else {
      this.selectedRowFilters = false;
    }
    
    this.lookupFileTypes$ = this.fileTypeService.getAllFileTypes()
      .subscribe(
        fileTypes => {
          this.fileTypes = fileTypes.map((type) => {
            return { label: type['Type'], value: type['Id'] }
          });
          this.fileTypes.unshift({ label:'Select File Type', value: null });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
    
    this.lookupConditions$ = this.conditionService.getAllConditions()
      .subscribe(
        conditions => {
          this.filterConditions = conditions.map((condition) => {
            return { label: condition['Name'], value: condition['Id'] }
          });
          this.filterConditions.unshift({ label:'Select Filter Condition', value: null });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
  }

  ngOnDestroy() {
    console.log("TtLayoutOne Component was initialized.");
    this.lookupFileTypes$.unsubscribe();
    this.lookupConditions$.unsubscribe();
  }

  onRowFiltersChange(event) {
    // "event" is always true OR false
    this.selectedRowFilters = event;

    const timeFromFileDefinitionForm = <FormGroup>this.configForm['controls']['TimeFromFileDefinition'];
    if(event) {
      if(timeFromFileDefinitionForm['controls']['FilterByColumn'].value === null) {
        timeFromFileDefinitionForm.setControl("FilterByColumn", HelperMethodService.initFilterByColumn(this, null, true));
      }
    } else {
      timeFromFileDefinitionForm.setControl("FilterByColumn", this.fb.control(null));
    }
  }

  onChangeIndexes(indexName: string, state: boolean) {
    if(indexName === "IsTabIndex") {
      let tabIndex = <FormControl>this.configForm['controls']['TimeFromFileDefinition']['controls']['FileSource']['controls']['IsTabIndex'];
      let tempTabIndex = <FormControl>this.configForm['controls']['TimeFromFileDefinition']['controls']['FileSource']['controls']['TempTabIndex'];
      this.updateIndexes(tabIndex, tempTabIndex, state);

    } else if(indexName === "AreColumnsIndexes") {
      let columnsIndexes = <FormControl>this.configForm['controls']['TimeFromFileDefinition']['controls']['AreColumnsIndexes'];
      let tempColumnsIndexes = <FormControl>this.configForm['controls']['TimeFromFileDefinition']['controls']['TempColumnsIndexes'];
      this.updateIndexes(columnsIndexes, tempColumnsIndexes, state);

    } else if(indexName === "IsFilterColumnTheIndex") {
      if(this.configForm['controls']['TimeFromFileDefinition']['controls']['FilterByColumn'].value !== null) {
        let filterColumnIndex = <FormControl>this.configForm['controls']['TimeFromFileDefinition']['controls']['FilterByColumn']['controls']['IsFilterColumnTheIndex'];
        let tempFilterColumnIndex = <FormControl>this.configForm['controls']['TimeFromFileDefinition']['controls']['FilterByColumn']['controls']['TempFilterColumnIndex'];
        this.updateIndexes(filterColumnIndex, tempFilterColumnIndex, state);
      }

    }
  }

  updateIndexes(definedIndex: FormControl, tempIndex: FormControl, state: boolean) {
    if(state) {
        definedIndex.patchValue(true);
        tempIndex.patchValue(false);
      } else {
        definedIndex.patchValue(false);
        tempIndex.patchValue(true);
      }
  }

}
