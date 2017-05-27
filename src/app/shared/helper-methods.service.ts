import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { timeTypeLayout1, timeTypeLayout2, 
         timeTypeLayout3, timeTypeLayout4, 
         timeTypeLayout5, timeTypeLayout6 } from './layouts-enum';
    
import { optionalValidationLayout1, 
         optionalValidationLayout3,
         optionalValidationLayout6,
         optionalValidationLayout7,
         optionalValidationLayout8 } from '../shared/validation-enum';


export class HelperMethodService {
  static optionalValidationArray = optionalValidationLayout1
                  .concat(optionalValidationLayout3)
                  .concat(optionalValidationLayout6)
                  .concat(optionalValidationLayout7)
                  .concat(optionalValidationLayout8);

  static findIdInArr(arr=[], id): boolean {
    return arr.find(num => num === id);
  }

  static findCalculationTypeById(calculationTypesList: Object[], calculationTypeId: number): Object {
    return calculationTypesList.find(obj => {
      return obj['Id'] == calculationTypeId
    });
  }

  static setTimeConfig(self: any, value: number, configForm: FormGroup, calculationTypeId: number = null, endTimeConfig: boolean = false): void {
    let optionalValidation: any;

    if(endTimeConfig && calculationTypeId) {
      optionalValidation = HelperMethodService.findIdInArr(this.optionalValidationArray, calculationTypeId) ? null : Validators.required;
    }

    if(optionalValidation === null) {
      //configForm.get('TimeConfigTypeId').setValue(null);
      configForm.setControl("TimeFromFileDefinition",self.fb.control(null));
      configForm.setControl("TimeFromTagDefinition", self.fb.control(null));
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null)); 
    }
    
    // timeType layout #1
    if(this.findIdInArr(timeTypeLayout1, value)) {
      if(configForm.controls['TimeFromFileDefinition'].value === null) {
        configForm.setControl("TimeFromFileDefinition", this.initTimeFromFileDefinition(self, null, true));
      }
      configForm.setControl("TimeFromTagDefinition", self.fb.control(null));
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null));  
    }
    // timeType layout #2
    else if(this.findIdInArr(timeTypeLayout2, value)) {
      if(configForm.controls['TimeFromSqlQuery'].value === null) {
        configForm.setControl("TimeFromSqlQuery", this.initSqlQuery(self, null, true));
      }
      configForm.setControl("TimeFromTagDefinition", self.fb.control(null));
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      configForm.setControl("TimeFromFileDefinition", self.fb.control(null));
    }
    // timeType layout #3
    else if(this.findIdInArr(timeTypeLayout3, value)) {
      if(configForm.controls['TimeFromSqlQuery'].value === null) {
        configForm.setControl("TimeFromSqlQuery", this.initSqlQuery(self, null, true));
      }
      if(configForm.controls['TimeFromTagDefinition'].value === null) {
        configForm.setControl("TimeFromTagDefinition", this.initTimeFromTagDefinition(self, null, true));
      }
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      configForm.setControl("TimeFromFileDefinition", self.fb.control(null));
    }
    // timeType layout #4
    else if(this.findIdInArr(timeTypeLayout4, value)) {
      if(configForm.controls['PeriodicTimeDefinition'].value === null) {
        configForm.setControl("PeriodicTimeDefinition", this.initPeriodicTimeDefinition(self, null, true));
      }
      configForm.setControl("TimeFromTagDefinition", self.fb.control(null));
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null));
      configForm.setControl("TimeFromFileDefinition", self.fb.control(null));
    }
    // timeType layout #5
    else if(this.findIdInArr(timeTypeLayout5, value)) {
      if(configForm.controls['PeriodicTimeDefinition'].value === null) {
        configForm.setControl("PeriodicTimeDefinition", this.initPeriodicTimeDefinition(self, null, true));
      }
      if(configForm.controls['TimeFromTagDefinition'].value === null) {
        configForm.setControl("TimeFromTagDefinition", this.initTimeFromTagDefinition(self, null, true));
      }
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null));
      configForm.setControl("TimeFromFileDefinition", self.fb.control(null));
    }
    // timeType layout #6
    else if(this.findIdInArr(timeTypeLayout6, value)) {
      if(configForm.controls['TimeFromTagDefinition'].value === null) {
        configForm.setControl("TimeFromTagDefinition", this.initTimeFromTagDefinition(self, null, true));
      }
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null));
      configForm.setControl("TimeFromFileDefinition", self.fb.control(null));
    }
  }

  static initStartOrEndTimeConfig(self: any, obj: Object, validation: any = Validators.required): FormGroup {
    if(obj !== null) {
      return self.fb.group({
        TimeConfigTypeId: [obj['TimeConfigTypeId'], validation],
        PeriodicTimeDefinition: this.initPeriodicTimeDefinition(self, obj['PeriodicTimeDefinition']),
        TimeFromTagDefinition: this.initTimeFromTagDefinition(self, obj['TimeFromTagDefinition']),
        TimeFromSqlQuery: this.initSqlQuery(self, obj['TimeFromSqlQuery']),
        TimeFromFileDefinition: this.initTimeFromFileDefinition(self, obj['TimeFromFileDefinition'])
      });
    } 
    else {
      return self.fb.group({
        TimeConfigTypeId: [null, validation],
        PeriodicTimeDefinition: null,
        TimeFromTagDefinition: null,
        TimeFromSqlQuery: null,
        TimeFromFileDefinition: null
      });
    }
  }

  static initTimeFromTagDefinition(self: any, obj: Object, createFormGroup: boolean = false): FormGroup {
    const validation = Validators.required;
    if(obj !== null) {
      return self.fb.group({
        Id: [obj['Id']],
        Tag: this.initTag(self, obj['Tag']),
        ConditionId: [obj['ConditionId'], validation],
        Value: [obj['Value'], validation],
        OffsetInSeconds: [obj['OffsetInSeconds'], Validators.pattern("[0-9]*")],
        OptionalSecondValue: [obj['OptionalSecondValue']]
      });
    } else {
      if(createFormGroup) {
        return self.fb.group({
          Tag: this.initTag(self, null),
          ConditionId: [null, validation],
          Value: [null, validation],
          OffsetInSeconds: [null, Validators.pattern("[0-9]*")],
          OptionalSecondValue: [null]
        });
      } else {
        return null;
      }
    }
  }

  static initSqlQuery(self, obj: Object, createFormGroup: boolean = false): FormGroup {
    if(obj != null) {
      return self.fb.group({
        Id: [obj['Id']],
        Query: [obj['Query'], Validators.required],
        QueryTypeId: [obj['QueryTypeId'], Validators.required],
        Parameters: [obj['Parameters']]
      });
    } else {
      if(createFormGroup) {
        return self.fb.group({
          Id: [null],
          Query: [null, Validators.required],
          QueryTypeId: [null, Validators.required],
          Parameters: [null]
        });
      } else {
        return null;
      }
    }
  }

  static initValueFromFileDefinition(self, obj: Object, createFormGroup: boolean = false): FormGroup {
    if(obj != null) {
      return self.fb.group({
        Id: [obj['Id']],
        FileSource: this.initFileSource(self, obj['FileSource']),
        ColumnValue: [obj['ColumnValue'], Validators.required],
        IsColumnValueIndex: [obj['IsColumnValueIndex'], Validators.required],
        TempColumnValueIndex: [!obj['IsColumnValueIndex']],
        FilterByColumn: this.initFilterByColumn(self, obj['FilterByColumn']),
        TempRowFilters: [false]
      })
    } else {
      if(createFormGroup) {
        return self.fb.group({
          Id: [null],
          FileSource: this.initFileSource(self, null),
          ColumnValue: [null, Validators.required],
          IsColumnValueIndex: [null, Validators.required],
          TempColumnValueIndex: [null],
          FilterByColumn: [null],
          TempRowFilters: [null]
        });
      } else {
        return null;
      }
    }
  }

  static initTimeFromFileDefinition(self, obj: Object, createFormGroup: boolean = false): FormGroup {
    if(obj != null) {
      return self.fb.group({
        Id: [obj['Id']],
        FileSource: this.initFileSource(self, obj['FileSource']),
        DateColumn: [obj['DateColumn'], Validators.required],
        TimeColumn: [obj['TimeColumn']],
        AreColumnsIndexes: [obj['AreColumnsIndexes'], Validators.required],
        TempColumnsIndexes: [!obj['AreColumnsIndexes']],
        OffsetInSeconds: [obj['OffsetInSeconds']],
        FilterByColumn: this.initFilterByColumn(self, obj['FilterByColumn']),
        TempRowFilters: [false]
      });
    } else {
      if(createFormGroup) {
        return self.fb.group({
          Id: [null],
          FileSource: this.initFileSource(self, null),
          DateColumn: [null, Validators.required],
          TimeColumn: [null],
          AreColumnsIndexes: [null, Validators.required],
          TempColumnsIndexes: [null],
          FilterByColumn: [null],
          TempRowFilters: [null]
        });
      } else {
        return null;
      }
    }
  }

  static initFileSource(self, obj: Object): FormGroup {
    const validation = Validators.required;

    if(obj != null) {
      return self.fb.group({
        Id: [obj['Id']],
        FileFullName: [obj['FileFullName'], validation],
        FileTypeId: [obj['FileTypeId'], validation],
        ColumnNamesInFirstRow: [obj['ColumnNamesInFirstRow'], validation],
        Tab: [obj['Tab']],
        IsTabIndex: [obj['IsTabIndex']],
        TempTabIndex: [!obj['IsTabIndex']]  
      })
    } else {
      return self.fb.group({
        Id: [null],
        FileFullName: [null, validation],
        FileTypeId: [null, validation],
        ColumnNamesInFirstRow: [true, validation],
        Tab: [null],
        IsTabIndex: [null],
        TempTabIndex: [null]
      });
    }
  }

  static initFilterByColumn(self: any, obj: Object, createFormGroup: boolean = false): FormGroup {
    const validation = Validators.required;

    if(obj != null) {
      return self.fb.group({
        Id: [obj['Id']],
        FilterColumn: [obj['FilterColumn'], validation],
        FilterValue: [obj['FilterValue'], validation],
        IsFilterColumnTheIndex: [obj['IsFilterColumnTheIndex'], validation],
        TempFilterColumnIndex: [!obj['IsFilterColumnTheIndex']],
        ConditionId: [obj['ConditionId'], validation],
        OptionalSecondFilterValue: [obj['OptionalSecondFilterValue']]
      })
    } else {
      if(createFormGroup) {
        return self.fb.group({
          Id: [null],
          FilterColumn: [null, validation],
          FilterValue: [null, validation],
          IsFilterColumnTheIndex: [null, validation],
          TempFilterColumnIndex: [null],
          ConditionId: [null, validation],
          OptionalSecondFilterValue: [null]
        });
      } else {
        return null;
      }
    }
  }

  static initPeriodicTimeDefinition(self: any, obj: Object = null, createFormGroup: boolean = false): FormGroup {
    const validation = Validators.required;
    if(obj != null) {
      return self.fb.group({
        FrequencyId: [obj['FrequencyId'], validation],
        OffsetInSeconds: [obj['OffsetInSeconds'], Validators.pattern("[0-9]*")],
        ResetTimeUnitId: [obj['ResetTimeUnitId']]
      });
    } else {
      if(createFormGroup) {
        return self.fb.group({
          FrequencyId: [null, validation],
          OffsetInSeconds: [null, Validators.pattern("[0-9]*")],
          ResetTimeUnitId: [null]
        });
      } else {
        return null;
      }
    }
  }

  static initTag(self: any, obj: Object, ): FormGroup {
    const validation = Validators.required;

    if(obj !== null) {
      return self.fb.group({
        Id: [obj['Id']],
        Name: [obj['Name'], validation],
        Source: [obj['Source'], validation],
        TimeField: [obj['TimeField']],
        ValueField: [obj['ValueField']],
        Description: [obj['Description']],
        TagAliases: this.initTagAliases(self, obj['TagAliases'])
      });
    } else {
      return self.fb.group({
        Id: [null],
        Name: [null, validation],
        Source: [null, validation],
        TimeField: [null],
        ValueField: [null],
        Description: [null],
        TagAliases: self.fb.array([])
      });
    }
  }

  static initTagAliases(self: any, obj: Object[]): FormArray {
    const validation: any = Validators.required;

    let tagsArr = self.fb.array([]);
    if(obj !== null) { 
      obj.forEach(tag => {
        tagsArr.push(self.fb.group({
          Id: [tag['Id']],
          ValueFromTag: [tag['ValueFromTag'], validation],
          Alias: [tag['Alias'], validation]
        }))
      })
      return tagsArr;
    } else {
      return tagsArr;
    }
  }

  static handleResponseMessages(self: any, response: Object, message: string = "New container was added.") {
    if(response['ValidationResultsDTO'] === null) {
      self.successfulMsgs = [];
      self.successfulMsgs.push({ severity: 'success', summary: 'Success', detail: message });
    } else {
      self.errorMessage = "true";
      self.msgs = [];
      let errorMessage;
      response['ValidationResultsDTO'].forEach(error => {
        errorMessage = error["ErrorMessage"];
        self.msgs.push({ severity: 'error', summary: 'Failed', detail: `${errorMessage}` });
      });
    }
    return self;
  } 
}