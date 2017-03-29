import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { uiLayout1, uiLayout2, uiLayout3, uiLayout4, uiLayout5, uiLayout6, uiLayout7, uiLayout8, uiLayout9 } from '../shared/layouts-enum';
import { optionalValidationLayout1, 
         optionalValidationLayout3,
         optionalValidationLayout6,
         optionalValidationLayout7,
         optionalValidationLayout8 } from '../shared/validation-enum';
import { HelperMethodService } from '../shared/helper-methods.service';
import { CalculationTypeService } from './calculation-type.service';
import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'app-calculation-type',
  templateUrl: './calculation-type.component.html',
  styleUrls: ['./calculation-type.component.scss']
})
export class CalculationTypeComponent implements OnInit, OnDestroy {
  calculationTypes: SelectItem[] = [];
  errorMessage: string;
  msgs: Message[] = [];
  calculationTypesList: Object[];
  calculationDescription: any;
  calculationTypeLayout: number;
  lookupCalculationTypes$: any

  @Input('form-group-level-2') configForm: FormGroup;
  @Input('selectedAttribute') selectedAttribute: string = "";
  @Input('data-sources') dataSources: SelectItem[];
  @Input('tags') tags: SelectItem[];

  constructor(private fb: FormBuilder,
              private calculationTypeService: CalculationTypeService) {}

  ngOnInit() {
    console.log("CalculationTypeComponent was initialized.");
    this.calculationTypesList = this.configForm.controls['CalculationTypesAllowed'].value;

    this.calculationTypes = this.calculationTypesList.map((calculationType) => {
      return { label: calculationType['Name'], value: calculationType['Id'] } 
    });
    this.calculationTypes.unshift({ label:'Select Calculation Type', value: null });

    if(this.configForm.controls['AttributeAndValue']['controls']['ValueConfig']['controls']['CalculationTypeId']) {
      this.onCalculationTypeChange(this.configForm.controls['AttributeAndValue']['controls']['ValueConfig']['controls']['CalculationTypeId'].value);
    }
  }

  ngOnDestroy() {
    console.log("CalculationType component was destroyed.");
  }

  onCalculationTypeChange(calculationTypeId: number) {
    const endTimeConfig = this.configForm.controls['AttributeAndValue']['controls']['ValueConfig']['controls']["EndTimeConfig"];
    const endTimeConfigValue = endTimeConfig ? endTimeConfig.value : null;

    const calculation = HelperMethodService.findCalculationTypeById(this.calculationTypesList, calculationTypeId);
    this.calculationDescription = calculation ? calculation['Description'] : null;
    this.calculationTypeLayout = calculation ? calculation["UiValidationIndicator"] : null;
    
    let checkOptionalValidation;

    if(calculationTypeId !== null && calculation) {
      // UI layout #1
      if(this.calculationTypeLayout === uiLayout1) {
        checkOptionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout1, calculationTypeId);
        const optionalValidation = checkOptionalValidation ? null : Validators.required;

        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        // check if EndTimeConfig is not empty. If it's not, use its value to reset whole EndTimeConfig with new validation rules
        if(endTimeConfigValue) {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, endTimeConfigValue, optionalValidation)); 
        } else {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null, optionalValidation));
        }

        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("MultiplyBy", this.fb.control(null, Validators.pattern('[0-9]*')));   
      } // UI layout #2  
      else if(this.calculationTypeLayout === uiLayout2) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("EndTimeConfig");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("DefaultValue", this.fb.control(null, Validators.required));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");   
      } // UI layout #3  
      else if(this.calculationTypeLayout === uiLayout3) {
        checkOptionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout3, calculationTypeId);
        const optionalValidation = checkOptionalValidation ? null : Validators.required;
        
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        // check if EndTimeConfig is not empty. If it's not, use its value to reset whole EndTimeConfig with new validation rules
        if(endTimeConfigValue) {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, endTimeConfigValue, optionalValidation)); 
        } else {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null, optionalValidation));
        }

        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");        
      } // UI layout #4
      else if(this.calculationTypeLayout === uiLayout4) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("DefaultValue", this.fb.control(null, Validators.required));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");   

      } // UI layout #5
      else if(this.calculationTypeLayout === uiLayout5) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("SqlQuery", HelperMethodService.initSqlQuery(this, null, true));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");  
      } // UI layout #6
      else if(this.calculationTypeLayout === uiLayout6) {
        checkOptionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout6, calculationTypeId);
        const optionalValidation =  checkOptionalValidation ? null : Validators.required;

        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        // check if EndTimeConfig is not empty. If it's not, use its value to reset whole EndTimeConfig with new validation rules
        if(endTimeConfigValue) {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, endTimeConfigValue, optionalValidation)); 
        } else {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null, optionalValidation));
        }
        
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("DefaultValue", this.fb.control(null, Validators.required));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("MultiplyBy", this.fb.control(null, Validators.pattern('[0-9]*')));             
      } // UI layout #7  
      else if(this.calculationTypeLayout === uiLayout7) {
        checkOptionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout7, calculationTypeId);
        const optionalValidation = checkOptionalValidation ? null : Validators.required;

        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        // check if EndTimeConfig is not empty. If it's not, use its value to reset whole EndTimeConfig with new validation rules
        if(endTimeConfigValue) {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, endTimeConfigValue, optionalValidation)); 
        } else {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null, optionalValidation));
        }

        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this, null));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");   

      } // UI layout #8
      else if(this.calculationTypeLayout === uiLayout8) {
        checkOptionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout8, calculationTypeId);
        const optionalValidation = checkOptionalValidation ? null : Validators.required;

        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null));
        // check if EndTimeConfig is not empty. If it's not, use its value to reset whole EndTimeConfig with new validation rules
        if(endTimeConfigValue) {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, endTimeConfigValue, optionalValidation)); 
        } else {
          this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, null, optionalValidation));
        }
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("ValueFromFileDefinition", HelperMethodService.initValueFromFileDefinition(this, null, true));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy"); 
      } // UI layout #9
      else if(this.calculationTypeLayout === uiLayout9) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("DefaultValue", this.fb.control(null, Validators.required));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("StartTimeConfig");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("EndTimeConfig");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");
      }
    } else {
      // remove controls in ValueConfig when the calculationType is not selected (is null)
      this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
      this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("StartTimeConfig");
      this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("EndTimeConfig");
      this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
      this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
      this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
      this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");
    }
  }
}
