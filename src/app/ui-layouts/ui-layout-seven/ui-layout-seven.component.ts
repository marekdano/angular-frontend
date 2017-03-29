import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { TimeConfigTypeService } from '../../time-config-type/time-config-type.service';
import { DataSourceNamesService } from '../../shared/data-source-names.service';
import { HelperMethodService } from '../../shared/helper-methods.service';
import { TagService } from '../../tag/tag.service';
import { timeTypeLayout1, timeTypeLayout2, timeTypeLayout3, timeTypeLayout4, timeTypeLayout5, timeTypeLayout6 } from '../../shared/layouts-enum';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'ui-layout-seven',
  templateUrl: './ui-layout-seven.component.html',
  styleUrls: ['./ui-layout-seven.component.scss']
})
export class UiLayoutSevenComponent implements OnInit, OnDestroy {
  tagAliases: Object[] = [];
  timeTypes: SelectItem[] = [];
  selectedTimeTypeId: number;
  calculationTypeId: number;
  tagAliasForm: FormGroup;
  displayDialog: boolean;
  errorMessage: string;
  msgs: Message[] = [];

  lookupTimeConfigTypes$: any;

  @Input('form-group-level-3') configForm: FormGroup;
  @Input('data-sources') dataSources: SelectItem[];
  @Input('tags') tags: SelectItem[];

  constructor(private fb: FormBuilder,
              private timeConfigTypeService: TimeConfigTypeService) { }

  ngOnInit() {
    console.log("UiLayoutSevenComponent was initialized.");
    this.calculationTypeId = this.configForm.controls['CalculationTypeId'].value;
    this.tagAliases = this.getTagAliasesForTable();

    // define a form for Tag Alias  
    this.tagAliasForm = this.fb.group({
      Id: [null],
      ValueFromTag: [null, [Validators.required, Validators.pattern("[0-9]*")]],
      Alias: [null, Validators.required]
    });

    this.lookupTimeConfigTypes$ = this.timeConfigTypeService.getAllTimeConfigTypes()
      .subscribe(
        timeTypes => {
          this.timeTypes = timeTypes.map((type):SelectItem => {
            return { label: type['Name'], value: type['Id'] }
          });
          // remove first element which is "current time" 
          this.timeTypes.shift();
          // add it as a first element
          this.timeTypes.unshift({ label: 'Select Time Type', value: null });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
  }

  ngOnDestroy() {
    console.log("UiLayoutSeven component was destroyed.");
    this.lookupTimeConfigTypes$.unsubscribe();
  }

  onSubmitTagAlias(newTagAlias: Object, event: any) {
    event.preventDefault();
    const tagAlias = this.fb.group({
      Id: [null],
      ValueFromTag: newTagAlias['ValueFromTag'],
      Alias: newTagAlias['Alias']
    });
    this.displayDialog = false;
    this.configForm.controls['Tag']['controls']['TagAliases'].push(tagAlias);
    this.tagAliases = this.getTagAliasesForTable();
    this.tagAliasForm.reset();
  }

  showDialogToAddTagAlias(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    this.tagAliasForm.reset();
    this.displayDialog = true;
  }

  getTagAliasesForTable() {
    return this.configForm.controls['Tag']['controls']['TagAliases']['controls'].map(alias => {
      return {
        ValueFromTag: alias.controls['ValueFromTag'].value,
        Alias: alias.controls['Alias'].value
      }
    });
  }

  onTimeTypeChange(value: number, configForm: FormGroup, insideOfEndTimeConfig: boolean = false) {
    this.selectedTimeTypeId = value;
    HelperMethodService.setTimeConfig(this, value, configForm, this.calculationTypeId, insideOfEndTimeConfig);
  }

}
