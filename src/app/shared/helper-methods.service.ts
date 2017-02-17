import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { timeTypeLayout1, timeTypeLayout2, 
         timeTypeLayout3, timeTypeLayout4, 
         timeTypeLayout5, timeTypeLayout6 } from './layouts-enum';
    
import { optionalValidataionLayout1, 
         optionalValidataionLayout3,
         optionalValidataionLayout6,
         optionalValidataionLayout7 } from '../shared/validation-enum';


export class HelperMethodService {
  static optionalValidationArray = optionalValidataionLayout1
                  .concat(optionalValidataionLayout3)
                  .concat(optionalValidataionLayout6)
                  .concat(optionalValidataionLayout7)

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
      optionalValidation = HelperMethodService.findIdInArr(this.optionalValidationArray, calculationTypeId) ? null : Validators.required
    }

    // timeType layout #1
    
    // timeType layout #2
    if(this.findIdInArr(timeTypeLayout2, value)) {
      if(configForm.controls['TimeFromSqlQuery'].value == null) {
        configForm.setControl("TimeFromSqlQuery", this.initSqlQuery(self));
      }
      configForm.setControl("TimeFromTagDefinition", self.fb.control(null));
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      //this.configForm.setControl("TimeFromFileDefinition", this.fb.control(null));
    }
    // timeType layout #3
    else if(this.findIdInArr(timeTypeLayout3, value)) {
      if(configForm.controls['TimeFromSqlQuery'].value == null) {
        configForm.setControl("TimeFromSqlQuery", this.initSqlQuery(self));
      }
      if(configForm.controls['TimeFromTagDefinition'].value == null) {
        configForm.setControl("TimeFromTagDefinition", this.initTimeFromTagDefinition(self));
      }
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      //this.configForm.setControl("TimeFromFileDefinition", this.fb.control(null));
    }
    // timeType layout #4
    else if(this.findIdInArr(timeTypeLayout4, value)) {
      if(configForm.controls['PeriodicTimeDefinition'].value == null) {
        //console.log("Config Form in the condition in tt-layout-four" );
        configForm.setControl("PeriodicTimeDefinition", this.initPeriodicTimeDefinition(self, optionalValidation));
      }
      configForm.setControl("TimeFromTagDefinition", self.fb.control(null));
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null));
      //this.configForm.setControl("TimeFromFileDefinition", this.fb.control(null));
    }
    // timeType layout #5
    else if(this.findIdInArr(timeTypeLayout5, value)) {
      if(configForm.controls['PeriodicTimeDefinition'].value == null) {
        configForm.setControl("PeriodicTimeDefinition", this.initPeriodicTimeDefinition(self, optionalValidation));
      }
      if(configForm.controls['TimeFromTagDefinition'].value == null) {
        configForm.setControl("TimeFromTagDefinition", this.initTimeFromTagDefinition(self, optionalValidation));
      }
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null));
      //this.configForm.setControl("TimeFromFileDefinition", this.fb.control(null));
    }
    // timeType layout #6
    else if(this.findIdInArr(timeTypeLayout6, value)) {
      if(configForm.controls['TimeFromTagDefinition'].value == null) {
        //console.log("Config Form in the condition in tt-layout-six" );
        configForm.setControl("TimeFromTagDefinition", this.initTimeFromTagDefinition(self, optionalValidation));
      }
      configForm.setControl("PeriodicTimeDefinition", self.fb.control(null));
      configForm.setControl("TimeFromSqlQuery", self.fb.control(null));
      //this.configForm.setControl("TimeFromFileDefinition", this.fb.control(null));
    }
  }

  static initStartOrEndTimeConfig(self: any, validation: any = Validators.required): FormGroup {
    return self.fb.group({
      TimeConfigTypeId: [null, validation],
      PeriodicTimeDefinition: [null],
      TimeFromTagDefinition: [null],
      TimeFromSqlQuery: [null],
      //TimeFromFileDefinition: [null]
    });
  }

  static initTimeFromTagDefinition(self: any, validation: any = Validators.required): FormGroup {
    return self.fb.group({
      Tag: this.initTag(self, validation),
      ConditionId: [null, validation],
      Value: [null, validation],
      OffsetInSeconds: [null, Validators.pattern("[0-9]*")],
      OptionalSecondValue: [null]
    });
  }

  static initSqlQuery(self): FormGroup {
    return self.fb.group({
      Id: [null],
      Query: [null, Validators.required],
      QueryTypeId: [null, Validators.required],
      Parameters: [null]
    });
  }

  static initValueFromFileDefinition(self): FormGroup {
    return self.fb.group({
      
    });
  }

  static initTag(self: any, validation: any = Validators.required): FormGroup {
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

  static initPeriodicTimeDefinition(self: any, validation: any = Validators.required): FormGroup {
    return self.fb.group({
      FrequencyId: [null, validation],
      OffsetInSeconds: [null, Validators.pattern("[0-9]*")],
      ResetTimeUnitId: [null]
    });
  }
}
