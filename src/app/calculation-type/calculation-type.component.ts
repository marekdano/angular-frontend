import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { uiLayout1, uiLayout2, uiLayout3, uiLayout4, uiLayout5, uiLayout6, uiLayout7, uiLayout8, uiLayout9 } from '../shared/layouts-enum';
import { optionalValidataionLayout1, 
         optionalValidataionLayout3,
         optionalValidataionLayout6,
         optionalValidataionLayout7 } from '../shared/validation-enum';
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

  constructor(private fb: FormBuilder,
              private calculationTypeService: CalculationTypeService) {}

  ngOnInit() {
    console.log("CalculationTypeComponent was initialized.");
    this.calculationTypes.push({ label:'Select Calculation Type', value: null });
    
    this.lookupCalculationTypes$ = this.calculationTypeService.getAllCalculationTypes()
      .subscribe(
        calculationTypes => {
          this.calculationTypesList = calculationTypes;
          calculationTypes.forEach(calculation => {
            this.calculationTypes.push({ label: calculation['Name'], value: calculation['Id'] });
          })
          if(this.configForm.controls['AttributeAndValue']['controls']['ValueConfig']['controls']['CalculationTypeId']) {
            this.onCalculationTypeChange(this.configForm.controls['AttributeAndValue']['controls']['ValueConfig']['controls']['CalculationTypeId'].value);
          }
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
  }

  ngOnDestroy() {
    console.log("CalculationType component was destroyed");
    this.lookupCalculationTypes$.unsubscribe();
  }

  onCalculationTypeChange(calculationTypeId: number) {
    console.log("CalculationTypeId : ", calculationTypeId);
    const calculation = HelperMethodService.findCalculationTypeById(this.calculationTypesList, calculationTypeId);
    this.calculationDescription = calculation ? calculation['Description'] : null;
    this.calculationTypeLayout = calculation ? calculation["UiValidationIndicator"] : null;

    console.log("CalculationTypeLayout : ", this.calculationTypeLayout);

    if(calculationTypeId !== null && calculation) {
      // UI layout #1
      if(this.calculationTypeLayout === uiLayout1) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout1, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, optionalValidation));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("MultiplyBy", this.fb.control(null, Validators.pattern('[0-9]*')));   
      } // UI layout #2  
      else if(this.calculationTypeLayout === uiLayout2) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("EndTimeConfig");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("DefaultValue", this.fb.control(null, Validators.required));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");   
      } // UI layout #3  
      else if(this.calculationTypeLayout === uiLayout3) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout3, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, optionalValidation));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");        
      } // UI layout #4
      else if(this.calculationTypeLayout === uiLayout4) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");   

      } // UI layout #5
      else if(this.calculationTypeLayout === uiLayout5) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("SqlQuery", HelperMethodService.initSqlQuery(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("Tag");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");  
      } // UI layout #6
      else if(this.calculationTypeLayout === uiLayout6) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout6, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, optionalValidation));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("MultiplyBy", this.fb.control(null, Validators.pattern('[0-9]*')));             
      } // UI layout #7  
      else if(this.calculationTypeLayout === uiLayout7) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout7, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("StartTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].setControl("EndTimeConfig", HelperMethodService.initStartOrEndTimeConfig(this, optionalValidation));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("Tag", HelperMethodService.initTag(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("SqlQuery");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("ValueFromFileDefinition");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("DefaultValue");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("MultiplyBy");   

      } // UI layout #8
      else if(this.calculationTypeLayout === uiLayout8) {
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].addControl("ValueFromFileDefinition", HelperMethodService.initValueFromFileDefinition(this));
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("StartTimeConfig");
        this.configForm.controls['AttributeAndValue']['controls']['ValueConfig'].removeControl("EndTimeConfig");
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
    }
  }
}
