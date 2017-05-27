import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { TimeConfigTypeService } from '../../time-config-type/time-config-type.service';
import { FileTypeService } from '../../file-type/file-type.service';
import { ConditionService } from '../../condition/condition.service';
import { HelperMethodService } from '../../shared/helper-methods.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-eight',
  templateUrl: './ui-layout-eight.component.html',
  styleUrls: ['./ui-layout-eight.component.scss']
})
export class UiLayoutEightComponent implements OnInit, OnDestroy {
  timeTypes: SelectItem[] = [];
  fileTypes: SelectItem[] = [];
  filterConditions: SelectItem[] = [];
  calculationTypeId: number;
  errorMessage: string;
  msgs: Message[] = [];
  selectedRowFilters: boolean;
  
  lookupTimeConfigTypes$: any;
  lookupFileTypes$: any;
  lookupConditions$: any;

  @Input('form-group-level-3') configForm: FormGroup;
  @Input('data-sources') dataSources: SelectItem[];
  @Input('tags') tags: SelectItem[];

  constructor(private fb: FormBuilder,
              private timeConfigTypeService: TimeConfigTypeService,
              private fileTypeService: FileTypeService,
              private conditionService: ConditionService) { }

  ngOnInit() {
    console.log("UiLayoutEightComponent was initialized.");
    this.calculationTypeId = this.configForm.controls['CalculationTypeId'].value;
    if(this.configForm.controls['ValueFromFileDefinition']['controls']['FilterByColumn'].value !== null) {
       this.selectedRowFilters = true;
       this.configForm.controls['ValueFromFileDefinition']['controls']['TempRowFilters'].patchValue(true);
    } else {
      this.selectedRowFilters = false;
    }

    this.lookupTimeConfigTypes$ = this.timeConfigTypeService.getAllTimeConfigTypes()
      .subscribe(
        timeTypes => {
          this.timeTypes = timeTypes.map((type):SelectItem => {
            return { label: type['Name'], value: type['Id'] }
          });
          // add it as a first element
          this.timeTypes.unshift({ label: 'Select Time Type', value: null });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );

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
    console.log("UiLayoutEightComponent was destroyed.");
    this.lookupTimeConfigTypes$.unsubscribe();
    this.lookupFileTypes$.unsubscribe();
    this.lookupConditions$.unsubscribe();
  }

  onRowFiltersChange(event) {
    // "event" is always true OR false
    this.selectedRowFilters = event;
    const valueFromFileDefinitionForm = <FormGroup>this.configForm['controls']['ValueFromFileDefinition'];
    if(event) {
      if(valueFromFileDefinitionForm['controls']['FilterByColumn'].value == null) {
        valueFromFileDefinitionForm.setControl("FilterByColumn", HelperMethodService.initFilterByColumn(this, null, true));
      }
    } else {
      valueFromFileDefinitionForm.setControl("FilterByColumn", this.fb.control(null));
    }
  }

  onTimeTypeChange(numberValue: number, configForm: FormGroup, insideOfEndTimeConfig: boolean = false) {
    HelperMethodService.setTimeConfig(this, numberValue, configForm, this.calculationTypeId, insideOfEndTimeConfig);
  }

  onChangeIndexes(indexName: string, state: boolean) {
    if(indexName === "IsTabIndex") {
      let tabIndex = <FormControl>this.configForm['controls']['ValueFromFileDefinition']['controls']['FileSource']['controls']['IsTabIndex'];
      let tempTabIndex = <FormControl>this.configForm['controls']['ValueFromFileDefinition']['controls']['FileSource']['controls']['TempTabIndex'];
      this.updateIndexes(tabIndex, tempTabIndex, state);

    } else if(indexName === "IsColumnValueIndex") {
      let columnsIndexes = <FormControl>this.configForm['controls']['ValueFromFileDefinition']['controls']['IsColumnValueIndex'];
      let tempColumnsIndexes = <FormControl>this.configForm['controls']['ValueFromFileDefinition']['controls']['TempColumnValueIndex'];
      this.updateIndexes(columnsIndexes, tempColumnsIndexes, state);

    } else if(indexName === "IsFilterColumnTheIndex") {
      //console.log(this.configForm['controls']['TimeFromFileDefinition']['controls']['FilterByColumn'].value);
      if(this.configForm['controls']['ValueFromFileDefinition']['controls']['FilterByColumn'].value !== null) {
        let filterColumnIndex = <FormControl>this.configForm['controls']['ValueFromFileDefinition']['controls']['FilterByColumn']['controls']['IsFilterColumnTheIndex'];
        let tempFilterColumnIndex = <FormControl>this.configForm['controls']['ValueFromFileDefinition']['controls']['FilterByColumn']['controls']['TempFilterColumnIndex'];
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
