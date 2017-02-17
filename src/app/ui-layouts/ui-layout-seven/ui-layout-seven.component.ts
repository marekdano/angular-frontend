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
  dataSources: SelectItem[] = [];
  tags: SelectItem[] = [];
  selectedTimeTypeId: number;
  calculationTypeId: number;
  tagAliasForm: FormGroup;
  displayDialog: boolean;
  errorMessage: string;
  msgs: Message[] = [];

  lookupDataSources$: any;
  lookupTimeConfigTypes$: any;
  lookupTags$: any;

  @Input('form-group-level-3') configForm: FormGroup;

  constructor(private fb: FormBuilder,
              private timeConfigTypeService: TimeConfigTypeService,
              private dataSourceNamesService: DataSourceNamesService,
              private tagService: TagService) { }

  ngOnInit() {
    console.log("UiLayoutSevenComponent was initialized.");
    this.calculationTypeId = this.configForm.controls['CalculationTypeId'].value;
    this.timeTypes.push({ label: 'Select Time Type', value: null });
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
    console.log("UiLayoutSeven component was destroyed");
    this.lookupTimeConfigTypes$.unsubscribe();
    this.lookupDataSources$.unsubscribe(); 
    this.lookupTags$.unsubscribe();
  }

  onSubmitTagAlias(newTagAlias: Object, event: any) {
    console.log("New Tag Alias: ", newTagAlias);
    event.preventDefault();
    const tagAlias = this.fb.group({
      Id: [null],
      ValueFromTag: newTagAlias['ValueFromTag'],
      Alias: newTagAlias['Alias']
    });
    this.displayDialog = false;
    this.configForm.controls['Tag']['controls']['TagAliases'].push(tagAlias);
    console.log("this.configForm.controls['Tag']['controls']['TagAliases'] : ", this.configForm.controls['Tag']['controls']['TagAliases']);
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
    console.log("TimeTypeID in onTimeTypeChange : ", value);
    this.selectedTimeTypeId = value;

    HelperMethodService.setTimeConfig(this, value, configForm, this.calculationTypeId, insideOfEndTimeConfig);
  }

}
