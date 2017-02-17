import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { SelectItem, Message } from 'primeng/primeng';
import { Container } from '../containers/container.interface';
import { uiLayout1, uiLayout2, uiLayout3, uiLayout4, uiLayout6, uiLayout7, uiLayout9 } from '../shared/layouts-enum'
import { optionalValidataionLayout1, 
         optionalValidataionLayout3,
         optionalValidataionLayout6,
         optionalValidataionLayout7 } from '../shared/validation-enum';
import { HelperMethodService } from '../shared/helper-methods.service';
import { ContainerService } from '../containers/container.service';
import { MethodService } from '../methods/method.service';
import { MethodTypeService } from '../method-type/method-type.service';
import { CalculationTypeService } from '../calculation-type/calculation-type.service';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit, OnDestroy {
  configForm: FormGroup
  containers: SelectItem[] = [];
  methods: SelectItem[] = [];
  methodChanged: boolean = false;
  label: string;
  errorMessage: string;
  msgs: Message[] = [];
  successfulMsgs: Message[] = [];
  methodTypes: Object[] = [];
  // add unique method if it's already defined
  uniqueMethodsDefined: number[] = [];
  container: Object;
  isLoading: boolean = true;
  calculationTypesList: Object[] = [];

  lookupContainers$: any;
  lookupContainer$: any;
  lookupMethodTypes$: any;
  lookupCalculationTypes$: any;
  savingContainerAndMethods$: any;

  selectedContainer: any;
  selectedMethod: string = null;
  destinationContainer: boolean = false;
  
  constructor(private fb: FormBuilder, 
              private containerService: ContainerService,
              private methodTypeService: MethodTypeService,
              private calculationTypeService: CalculationTypeService) { }

  ngOnInit() {  
    this.configForm = this.fb.group({
      ContainerKey: [null, Validators.required],
      ContainerName: [null, Validators.required],
      PlantAreaName: [null, Validators.required],
      ContainerTypeName: [null, Validators.required],
      Methods: this.fb.array([])
    });

    this.containers.push({label:'Select Container', value: null});

    //console.log("Error message", this.errorMessage);
    this.getContainers();
    this.getCalculationTypes();
    this.getMethodTypes();
    this.label = null;
  }

  ngOnDestroy() {
    console.log("ConfigForm component was destroyed");
    if(this.lookupContainers$) {
      this.lookupContainers$.unsubscribe();
    }

    if(this.lookupContainer$) {
      this.lookupContainer$.unsubscribe(); 
    }
    
    if(this.lookupMethodTypes$) {
      this.lookupMethodTypes$.unsubscribe();
    }

    if(this.lookupCalculationTypes$) {
      this.lookupCalculationTypes$.unsubscribe();
    }

    if(this.savingContainerAndMethods$) {
      this.savingContainerAndMethods$.unsubscribe();
    }

  }

  onSubmit(configFormObj) {
    console.log("Form submitted");
    console.log(JSON.stringify(configFormObj));
    console.log(configFormObj);

    // remove from JSON object MethodId and ValueConfig if CalculationTypeId is null 
    const methods = configFormObj['Methods'].map(method => {
      return {
        Id: method['Id'],
        MethodTypeId: method['MethodTypeId'],
        DestinationUnitId: method['DestinationUnitId'],
        MethodName: method['MethodName'],
        AllowableAttributes: method['AllowableAttributes'].map(attribute => {
          if(attribute['AttributeAndValue']['ValueConfig']['CalculationTypeId'] === null) {
            return {
              AttributeTypeId: attribute['AttributeTypeId'],
              AttributeAndValue: null
            }
          } else {
            return attribute
          }
        })
      }
    });

    const objToBeSaved = {
      ContainerKey: configFormObj['ContainerKey'],
      ContainerName: configFormObj['ContainerName'],
      PlantAreaName: configFormObj['PlantAreaName'],
      ContainerTypeName: configFormObj['ContainerTypeName'],
      Methods: methods
    }
    console.log(JSON.stringify(objToBeSaved));

    this.saveContainerAndMethods(objToBeSaved);
    this.configForm.reset(); 
  }

  onContainerChange(value: string): void {
    console.log("Value in onContainerChange : ", value);

    // display message while data are loaded from the server
    if(value != null) {
      this.isLoading = true;
      this.successfulMsgs = [];
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Retrieving data', detail: 'Loading data from server...' });
    } else {
      this.isLoading = false;
    }
    
    // value is ContainerKey of the selected container
    this.selectedContainer = value;
    console.log("Selected Container: ", this.selectedContainer);

    if(this.selectedContainer) {
      this.uniqueMethodsDefined = [];
      this.getContainer(this.selectedContainer);
    
      this.configForm.get('Methods').enable();
      this.selectedMethod = null;
      this.destinationContainer = false;

      // clear Methods array when a container is changed
      this.configForm.setControl('Methods', this.fb.array([]));

      // clear the methods dropdown
      this.methods = [];
      this.methods.push({ label:'Select Method', value: null });
      
    } else {
      this.configForm.get('Methods').disable();
      this.destinationContainer = false;
      this.methods = [];
     }
  }

  onMethodChange(valueOfMethod: string): void {
    if(valueOfMethod && this.selectedMethod != valueOfMethod) {
      console.log("Value in methodChange function: ", valueOfMethod);
      this.selectedMethod = valueOfMethod;
    } else if(!valueOfMethod) {
      console.log("SelectedMethod is set to null in onMethodChange");
      this.selectedMethod = null;
    }

    // Enable destination container when the selected method is the method of method type CreateIQSMovement 
    if(this.selectedMethod && this.selectedMethod['method']['MethodTypeId'] == 10) {
      //console.log("this.configForm.controls['Methods']['controls'] : ", this.configForm.controls['Methods']['controls']);
      this.destinationContainer = true;
    } else {
      this.destinationContainer = false;
      console.log("Selected Destination Container: ", this.destinationContainer);
    }
  }

  addMethodWithAttributes(method: Object): void {
    // add method to the list
    const control = <FormArray>this.configForm.controls['Methods'];
    const validationOfDestinationUnitId = method['MethodTypeId'] === 10 ? Validators.required : null
    if(method['MethodTypeId'] === 8 || method['MethodTypeId'] === 12) {
      this.uniqueMethodsDefined.push(method['MethodTypeId']);
    }
    const newMethod = this.fb.group({
      Id: [method['Id'] || 0],
      MethodId: [null],
      MethodTypeId: [method['MethodTypeId']],
      DestinationUnitId: [method['DestinationUnitId'] || null, validationOfDestinationUnitId],
      MethodName: [method['MethodName']],
      AllowableAttributes: this.fb.array([])
    });   
    control.push(newMethod);

    // get the Index of the last method
    let methodIndex = this.configForm.controls['Methods']['controls'].length - 1;
    
    // Called when a container has method
    if(method['AllowableAttributes']) {
      method['AllowableAttributes'].forEach(obj => {
        //console.log("OBJECT: ", obj);
        const attribute = this.fb.group({
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          AttributeTypeName: [obj['AttributeTypeName'], Validators.required],
          AttributeTypeDescription: [obj['AttributeTypeDescription'] || null],
          IsRequired: [obj['IsRequired'], Validators.required],
          AttributeAndValue: this.initAttributeAndValue(obj)
        })
        control.controls[methodIndex]['controls']['AllowableAttributes'].push(attribute);
      });
      //console.log("JSON form data: ", JSON.stringify(this.configForm.value));

    // Called when a new method is created of the chosen container
    } else {
      const methodTypeWithAttributes = this.methodTypes.find(methodType => {
        return methodType['Id'] == method['MethodTypeId']
      }) 

      if(methodTypeWithAttributes) {
        methodTypeWithAttributes['AttributesAvailable'].forEach(obj => {
          const validationOfCalculationTypeId = obj['IsRequired'] ? Validators.required : null;
          const attribute = this.fb.group({
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            AttributeTypeName: [obj['AttributeTypeName'], Validators.required],
            AttributeTypeDescription: [obj['AttributeTypeDescription'] || null],
            IsRequired: [obj['IsRequired'], Validators.required],
            AttributeAndValue: this.fb.group({
              ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
              AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
              ValueConfig: this.fb.group({
                CalculationTypeId: [null, validationOfCalculationTypeId],
              })
            })
          });
          //console.log("New Attribute: ", attribute);
          control.controls[methodIndex]['controls']['AllowableAttributes'].push(attribute);
        });
      }
    }
  }

  initAttributeAndValue(obj: Object): FormGroup {
    if(obj && obj['AttributeAndValue']) {
      const calculationTypeId = obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'];
      const validationOfCalculationTypeId = obj['IsRequired'] ? Validators.required : null;

      const calculation = HelperMethodService.findCalculationTypeById(this.calculationTypesList, calculationTypeId);

      // UI layout #1
      if(calculation["UiValidationIndicator"] === uiLayout1) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout1, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        return this.fb.group({
          ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          ValueConfig: this.fb.group({
            CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
            StartTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
            EndTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
            Tag: this.initTag(obj['AttributeAndValue']['ValueConfig']['Tag']),
            SqlQuery: this.initSqlQuery(obj['AttributeAndValue']['ValueConfig']['SqlQuery']),
            //ValueFromFileDefinition: this.initValueFromFileDefinition(...)
            MultiplyBy: [obj['AttributeAndValue']['ValueConfig']['MultiplyBy'], Validators.pattern("[0-9]*")]
          })
        });
      } // UI layout #2 
      else if(calculation["UiValidationIndicator"] === uiLayout2){
        return this.fb.group({
          ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          ValueConfig: this.fb.group({
            CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
            StartTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
            SqlQuery: this.initSqlQuery(obj['AttributeAndValue']['ValueConfig']['SqlQuery']),
            //ValueFromFileDefinition: this.initValueFromFileDefinition(...)
            DefaultValue: [obj['AttributeAndValue']['ValueConfig']['DefaultValue'], Validators.required]
          })
        });
      } // UI layout #3
      else if(calculation["UiValidationIndicator"] === uiLayout3) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout3, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        return this.fb.group({
          ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          ValueConfig: this.fb.group({
            CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
            StartTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
            EndTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
            SqlQuery: this.initSqlQuery(obj['AttributeAndValue']['ValueConfig']['SqlQuery'])
            //ValueFromFileDefinition: this.initValueFromFileDefinition(...)
          })
        });
      } // UI layout #4 
      else if(calculation["UiValidationIndicator"] === uiLayout4) {
        return this.fb.group({
          ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          ValueConfig: this.fb.group({
            CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
            StartTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
            EndTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['EndTimeConfig']),
            Tag: this.initTag(obj['AttributeAndValue']['ValueConfig']['Tag']),
            SqlQuery: this.initSqlQuery(obj['AttributeAndValue']['ValueConfig']['SqlQuery']),
            //ValueFromFileDefinition: this.initValueFromFileDefinition(...)
          })
        });
      } // UI layout #6 
      else if(calculation["UiValidationIndicator"] === uiLayout6) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout6, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        return this.fb.group({
          ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          ValueConfig: this.fb.group({
            CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
            StartTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
            EndTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
            Tag: this.initTag(obj['AttributeAndValue']['ValueConfig']['Tag']),
            SqlQuery: this.initSqlQuery(obj['AttributeAndValue']['ValueConfig']['SqlQuery']),
            //ValueFromFileDefinition: this.initValueFromFileDefinition(...)
            MultiplyBy: [obj['AttributeAndValue']['ValueConfig']['MultiplyBy'], Validators.pattern("[0-9]*")],
            DefaultValue: [obj['AttributeAndValue']['ValueConfig']['DefaultValue']]
          })
        });
      } // UI layout #7 
      else if(calculation["UiValidationIndicator"] === uiLayout7) {
        const optionalValidation = HelperMethodService.findIdInArr(optionalValidataionLayout7, calculationTypeId) 
                                    ? null 
                                    : Validators.required
        return this.fb.group({
          ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          ValueConfig: this.fb.group({
            CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
            StartTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
            EndTimeConfig: this.initStartOrEndTimeConfig(obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
            Tag: this.initTag(obj['AttributeAndValue']['ValueConfig']['Tag']),
            SqlQuery: this.initSqlQuery(obj['AttributeAndValue']['ValueConfig']['SqlQuery'])
            //ValueFromFileDefinition: this.initValueFromFileDefinition(...)
          })
        });
      } // UI layout #9 
      else if(calculation["UiValidationIndicator"] === uiLayout9) {
        return this.fb.group({
          ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          ValueConfig: this.fb.group({
            CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
            // attribute fields
          })
        });
      } else {
        console.log("UI layout was not defined.");
      }
    } else {
      return this.fb.group({
        ValueConfigId: [obj['ValueConfigId'] || 0, Validators.required],
        AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
        ValueConfig: this.fb.group({
          CalculationTypeId: [null],
        })
      })
    }
  }

  initStartOrEndTimeConfig(obj, validation: any = Validators.required): FormGroup {
    if(obj !== null) {
      return this.fb.group({
        TimeConfigTypeId: [obj['TimeConfigTypeId'], validation],
        PeriodicTimeDefinition: this.initPeriodicTimeDefinition(obj['PeriodicTimeDefinition'], validation),
        TimeFromTagDefinition: this.initTimeFromTagDefinition(obj['TimeFromTagDefinition'], validation),
        TimeFromSqlQuery: this.initSqlQuery(obj['TimeFromSqlQuery']),
        //TimeFromFileDefinition: this.initTimeFromFileDefinition(...)
      });
    } 
    else {
      return this.fb.group({
        TimeConfigTypeId: [null, validation],
        PeriodicTimeDefinition: null,
        TimeFromTagDefinition: null,
        TimeFromSqlQuery: null,
        //TimeFromFileDefinition: null
      });
    }
  }

  initTag(obj: Object, validation: any = Validators.required ): FormGroup {
    if(obj !== null) {
      return this.fb.group({
        Id: [obj['Id']],
        Name: [obj['Name'], validation],
        Source: [obj['Source'], validation],
        TimeField: [obj['TimeField']],
        ValueField: [obj['ValueField']],
        Description: [obj['Description']],
        TagAliases: this.initTagAliases(obj['TagAliases'], validation)
      });
    } 
  }

  initTimeFromTagDefinition(obj: Object, validation: any = Validators.required): FormGroup {
    if(obj !== null) {
      return this.fb.group({
        Id: [obj['Id']],
        Tag: this.initTag(obj['Tag'], validation),
        ConditionId: [obj['ConditionId'], validation],
        Value: [obj['Value'], validation],
        OffsetInSeconds: [obj['OffsetInSeconds'], Validators.pattern("[0-9]*")],
        OptionalSecondValue: [obj['OptionalSecondValue']]
      });
    } else {
      return null;
    }
  }

  initPeriodicTimeDefinition(obj: Object, validation: any = Validators.required): FormGroup {
    if(obj != null) {
      return this.fb.group({
        FrequencyId: [obj['FrequencyId'], validation],
        OffsetInSeconds: [obj['OffsetInSeconds'], Validators.pattern("[0-9]*")],
        ResetTimeUnitId: [obj['ResetTimeUnitId']]
      });
    } else {
      return null;
    }
  }

  initTagAliases(obj: Object[], validation: any = Validators.required): FormArray {
    let tagsArr = this.fb.array([]);
    if(obj !== null) { 
      obj.forEach(tag => {
        //console.log("Tag in TagAliases: ", tag);
        tagsArr.push(this.fb.group({
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

  initSqlQuery(obj: Object): FormGroup {
    if(obj != null) {
      return this.fb.group({
        Id: [obj['Id']],
        Query: [obj['Query'], Validators.required],
        QueryTypeId: [obj['QueryTypeId'], Validators.required],
        Parameters: [obj['Parameters']]
      });
    } else {
      return null;
    }
  }

  handleMethodAdded(method, index): void {
    console.log("Value in handleMethodAdded : ", method);
   // console.log("ConfigFormWithMethod array passed : ", configFormWithMethods);
    console.log("Last Index passed: ", index);
    const lastIndex = this.methods.length;
    this.methods.push({ label: method['MethodName'], value: {id: lastIndex-1, method} });

    this.addMethodWithAttributes(method);
    this.configForm.controls['Methods']['controls'][index]['controls']['MethodId'].patchValue({id: lastIndex-1, method})
    console.log("method: ", this.configForm.controls['Methods']['controls'][index]['controls']['MethodId']);
    this.onMethodChange(this.methods[lastIndex].value);
  }

  // This action gets from Create Container Component when error
  // is received from the server while attempting to create a new container
  errorMsg(error) {
    console.log("Error to save the container: ", error);
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Unavailable', detail: "There was problem to save the container." });
  }

  // This function runs when a new container is created.
  getUpdatedContainers() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success', detail: "New Container was addded." });
    this.getContainers();
  }

  // The function for handling the list of containers
  getContainers(): void {
    this.lookupContainers$ = this.containerService.getAllContainers()
      .subscribe(
        containers => {
          this.errorMessage = null;
          containers.forEach(container => {
            this.containers.push({ label: container['ContainerDisplayName'], value: container['ContainerKey'] });
          })
        },
        error => {
          this.errorMessage = error;
          console.log("Error : ", this.errorMessage);
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );
  }

  getContainer(id): void {
    this.lookupContainer$ = this.containerService.getContainer(id)
      .subscribe(
        container => {
          this.errorMessage = null;
          this.container = container;
          let i = 0;
          this.selectedContainer = container;
          this.selectedContainer['Methods'].forEach(method => {
            this.addMethodWithAttributes(method);
            this.methods.push({ label: method['MethodName'], value: {id: i++, method} })
          });
          this.configForm.patchValue({
            ContainerName: this.selectedContainer['ContainerName'], 
            PlantAreaName: this.selectedContainer['PlantAreaName'], 
            ContainerTypeName: this.selectedContainer['ContainerTypeName'],
          });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        },
        /* onComplete */ 
        () => this.isLoading = false
      );
  }

  getMethodTypes(): void {
    this.lookupMethodTypes$ = this.methodTypeService.getAllMethodTypes()
      .subscribe(
        methodTypes => {
          this.methodTypes = methodTypes;
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );
  }

  getCalculationTypes(): void {
    this.lookupCalculationTypes$ = this.calculationTypeService.getAllCalculationTypes()
      .subscribe(
        calculationTypes => {
          this.calculationTypesList = calculationTypes;
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
  }

  saveContainerAndMethods(objToBeSaved: Container): void {
    this.savingContainerAndMethods$ = this.containerService.saveContainerAndMethods(objToBeSaved)
      .subscribe(
        data => {
          console.log("Data after container and methods was saved: ", data);
          this.msgs = [];
          this.successfulMsgs = [];
          this.successfulMsgs.push({ severity:'success', summary: 'Success', detail: "The container with methods was saved." });
          this.getContainers();
          setTimeout(() => this.successfulMsgs = [], 5000);
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );
  }
}
