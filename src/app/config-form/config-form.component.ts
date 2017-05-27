import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { SelectItem, Message } from 'primeng/primeng';
import { Container } from '../containers/container.interface';
import { uiLayout1, uiLayout2, uiLayout3, uiLayout4, uiLayout5, uiLayout6, uiLayout7, uiLayout8, uiLayout9 } from '../shared/layouts-enum'
import { optionalValidationLayout1, 
         optionalValidationLayout3,
         optionalValidationLayout6,
         optionalValidationLayout7,
         optionalValidationLayout8 } from '../shared/validation-enum';
import { HelperMethodService } from '../shared/helper-methods.service';
import { ContainerService } from '../containers/container.service';
import { MethodService } from '../methods/method.service';
import { MethodTypeService } from '../method-type/method-type.service';
import { CalculationTypeService } from '../calculation-type/calculation-type.service';
import { DataSourceNamesService } from '../shared/data-source-names.service';
import { TagService } from '../tag/tag.service';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit, OnDestroy {
  configForm: FormGroup;
  containers: SelectItem[] = [];
  methods: SelectItem[] = [];
  dataSources: SelectItem[] = [];
  tags: SelectItem[] = [];
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
  lookupDataSources$: any; 
  lookupTags$: any;
  savingContainerAndMethods$: any;

  selectedContainer: any = null;
  selectedMethod: string = null;
  destinationContainer: boolean = false;
  
  constructor(private fb: FormBuilder, 
              private containerService: ContainerService,
              private methodService: MethodService,
              private methodTypeService: MethodTypeService,
              private calculationTypeService: CalculationTypeService,
              private dataSourceNamesService: DataSourceNamesService,
              private tagService: TagService) { }

  ngOnInit() {  
    console.log("ConfigForm component was initialized.");
    this.configForm = this.fb.group({
      ContainerKey: [null, Validators.required],
      ContainerName: [null, Validators.required],
      PlantAreaName: [null, Validators.required],
      ContainerTypeName: [null, Validators.required],
      Methods: this.fb.array([])
    });

    this.containers.push({label:'Select Container', value: null});
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Retrieving data', detail: 'Loading data from server...' });

    this.getContainers();
    this.getCalculationTypes();
    this.getMethodTypes();
    this.getDataSources();
    this.getTags();
    this.label = null;
  }

  ngOnDestroy() {
    console.log("ConfigForm component was destroyed.");
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
    
    if(this.lookupDataSources$) {
      this.lookupDataSources$.unsubscribe(); 
    }
    
    if(this.lookupTags$) {
      this.lookupTags$.unsubscribe();
    }
  }

  onSubmit(configFormObj) {
    console.log("Form submitted");
    // remove from JSON object MethodId and ValueConfig if CalculationTypeId is null 
    // remove temporary fields
    const methods = configFormObj['Methods'].map((method: Object) => {
      let startTimeConfig, endTimeConfig;
      if(method['MethodTypeId'] === 11) {
        startTimeConfig = this.getStartTimeConfig(method)
        endTimeConfig = this.getEndTimeConfig(method)
      }

      return {
        Id: method['Id'],
        MethodTypeId: method['MethodTypeId'],
        UnitId: method['UnitId'],
        DestinationUnitId: method['DestinationUnitId'],
        MethodName: method['MethodName'],
        MethodEnabled: method['MethodEnabled'],
        LastExecutionTime: method['LastExecutionTime'],
        AllowableAttributes: method['AllowableAttributes'].map(attribute => {
          if(attribute['AttributeAndValue']['ValueConfig']['CalculationTypeId'] === null) {
            return {
              AttributeTypeId: attribute['AttributeTypeId'],
              AttributeAndValue: null
            }
          } else {
            if('EndTimeConfig' in attribute['AttributeAndValue']['ValueConfig']) {
              if(attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig'] !== null ) {
                if(attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig']['TimeConfigTypeId'] === null) {
                  // EndTimeConfig will be null instead of being an Object if its property TimeConfigTypeId is null
                  attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig'] = null
                } else if(attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig']['TimeFromFileDefinition'] !== null) {
                  // delete Temporary fields
                  delete attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig']['TimeFromFileDefinition']['FileSource']['TempTabIndex'];
                  delete attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig']['TimeFromFileDefinition']['TempColumnsIndexes'];
                  if(attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig']['TimeFromFileDefinition']['FilterByColumn'] !== null) {
                    delete attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig']['TimeFromFileDefinition']['FilterByColumn']['TempFilterColumnIndex'];
                  }
                }
              }
            } 
            if('StartTimeConfig' in attribute['AttributeAndValue']['ValueConfig']) {
              if(attribute['AttributeAndValue']['ValueConfig']['StartTimeConfig']['TimeFromFileDefinition'] !== null) {
                // delete Temporary fields
                delete attribute['AttributeAndValue']['ValueConfig']['StartTimeConfig']['TimeFromFileDefinition']['FileSource']['TempTabIndex'];
                delete attribute['AttributeAndValue']['ValueConfig']['StartTimeConfig']['TimeFromFileDefinition']['TempColumnsIndexes'];
                if(attribute['AttributeAndValue']['ValueConfig']['StartTimeConfig']['TimeFromFileDefinition']['FilterByColumn'] !== null) {
                  delete attribute['AttributeAndValue']['ValueConfig']['StartTimeConfig']['TimeFromFileDefinition']['FilterByColumn']['TempFilterColumnIndex'];
                }
              }
            }
            // define StartTimeConfig and EndTimeConfig when the calculationTypeId is 42
            if(attribute['AttributeAndValue']['ValueConfig']['CalculationTypeId'] === 42) {
              attribute['AttributeAndValue']['ValueConfig']['StartTimeConfig'] = startTimeConfig;
              attribute['AttributeAndValue']['ValueConfig']['EndTimeConfig'] = endTimeConfig;              
            } 
          
            return attribute;
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

    console.log("Form data sent: ", JSON.stringify({"ContainerDTO": objToBeSaved}));
    this.isLoading = true;
    this.msgs = [];
    this.msgs.push({ severity: 'info', detail: 'Sending data...' });
    this.saveContainerAndMethods(objToBeSaved);
  }

  onContainerChange(id: number): void {
    // display message while data are loaded from the server
    if(id != null) {
      this.isLoading = true;
      this.successfulMsgs = [];
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Retrieving data', detail: 'Loading data from server...' });
    } else {
      this.isLoading = false;
    }
    
    // id is ContainerKey of the selected container
    this.selectedContainer = id;

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
      this.selectedMethod = valueOfMethod;
    } else if(!valueOfMethod) {
      this.selectedMethod = null;
    }

    // Enable destination container when the selected method is the method of method type CreateIQSMovement 
    if(this.selectedMethod && this.selectedMethod['method']['MethodTypeId'] == 10) {
      this.destinationContainer = true;
    } else {
      this.destinationContainer = false;
    }
  }

  addMethodWithAttributes(method: Object): void {
    // add method to the list
    const control = <FormArray>this.configForm.controls['Methods'];
    const validationOfDestinationUnitId = method['MethodTypeId'] === 10 ? Validators.required : null
    // methodTypeId 8 and 12 are unique
    if(method['MethodTypeId'] === 8 || method['MethodTypeId'] === 12) {
      this.uniqueMethodsDefined.push(method['MethodTypeId']);
    }
    const newMethod = this.fb.group({
      Id: [method['Id'] || 0],
      MethodId: [null],
      MethodTypeId: [method['MethodTypeId']],
      UnitId: [method['UnitId'] || this.selectedContainer['ContainerKey']],
      DestinationUnitId: [method['DestinationUnitId'] || null, validationOfDestinationUnitId],
      MethodName: [method['MethodName']],
      MethodEnabled: [method['MethodEnabled']],
      LastExecutionTime: [method['LastExecutionTime'] || null],
      AllowableAttributes: this.fb.array([])
    });   
    control.push(newMethod);

    // get the Index of the last method
    let methodIndex = this.configForm.controls['Methods']['controls'].length - 1;
    
    // Called when a container has method
    if(method['AllowableAttributes']) {
      method['AllowableAttributes'].forEach(obj => {
        const attribute = this.fb.group({
          AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
          AttributeTypeName: [obj['AttributeTypeName'], Validators.required],
          AttributeTypeDescription: [obj['AttributeTypeDescription'] || null],
          IsRequired: [obj['IsRequired'], Validators.required],
          CalculationTypesAllowed: this.initCalculationTypesAllowed(obj),
          AttributeAndValue: this.initAttributeAndValue(obj)
        })
        control.controls[methodIndex]['controls']['AllowableAttributes'].push(attribute);
      });

    // Called when a new method is created of the chosen container
    } else {
      const methodTypeWithAttributes = this.methodTypes.find(methodType => {
        return methodType['Id'] == method['MethodTypeId']
      });

      if(methodTypeWithAttributes) {
        methodTypeWithAttributes['AttributesAvailable'].forEach(obj => {
          const validationOfCalculationTypeId = obj['IsRequired'] ? Validators.required : null;
          const attribute = this.fb.group({
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            AttributeTypeName: [obj['AttributeTypeName'], Validators.required],
            AttributeTypeDescription: [obj['AttributeTypeDescription'] || null],
            IsRequired: [obj['IsRequired'], Validators.required],
            CalculationTypesAllowed: this.initCalculationTypesAllowed(obj),
            AttributeAndValue: this.fb.group({
              ValueConfigId: [0, Validators.required],
              AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
              ValueConfig: this.fb.group({
                CalculationTypeId: [null, validationOfCalculationTypeId],
              })
            })
          });
          
          control.controls[methodIndex]['controls']['AllowableAttributes'].push(attribute);
        });
      }
    }
  }

  initAttributeAndValue(obj: Object): FormGroup {
    const validationOfCalculationTypeId = obj['IsRequired'] ? Validators.required : null;

    if(obj && obj['AttributeAndValue']) {
      const calculationTypeId = obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'];
    
      const calculation = HelperMethodService.findCalculationTypeById(this.calculationTypesList, calculationTypeId);
      if(calculation && 'UiValidationIndicator' in calculation) {
        // UI layout #1
        if(calculation["UiValidationIndicator"] === uiLayout1) {
          const optionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout1, calculationTypeId) 
                                      ? null 
                                      : Validators.required
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              EndTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
              Tag: HelperMethodService.initTag(this, obj['AttributeAndValue']['ValueConfig']['Tag']),
              MultiplyBy: [obj['AttributeAndValue']['ValueConfig']['MultiplyBy'], Validators.pattern("[0-9]*")]
            })
          });
        } // UI layout #2 
        else if(calculation["UiValidationIndicator"] === uiLayout2){
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              DefaultValue: [obj['AttributeAndValue']['ValueConfig']['DefaultValue'], Validators.required]
            })
          });
        } // UI layout #3
        else if(calculation["UiValidationIndicator"] === uiLayout3) {
          const optionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout3, calculationTypeId) 
                                      ? null 
                                      : Validators.required
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              EndTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation)
            })
          });
        } // UI layout #4 
        else if(calculation["UiValidationIndicator"] === uiLayout4) {
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              EndTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['EndTimeConfig']),
              Tag: HelperMethodService.initTag(this, obj['AttributeAndValue']['ValueConfig']['Tag']),
              DefaultValue: [obj['AttributeAndValue']['ValueConfig']['DefaultValue'], Validators.required]
            })
          });
        } // UI layout #5
        else if(calculation["UiValidationIndicator"] === uiLayout5) {
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              EndTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['EndTimeConfig']),
              SqlQuery: HelperMethodService.initSqlQuery(this, obj['AttributeAndValue']['ValueConfig']['SqlQuery'])
            })
          })
        } // UI layout #6 
        else if(calculation["UiValidationIndicator"] === uiLayout6) {
          const optionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout6, calculationTypeId) 
                                      ? null 
                                      : Validators.required
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              EndTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
              Tag: HelperMethodService.initTag(this, obj['AttributeAndValue']['ValueConfig']['Tag']),
              MultiplyBy: [obj['AttributeAndValue']['ValueConfig']['MultiplyBy'], Validators.pattern("[0-9]*")],
              DefaultValue: [obj['AttributeAndValue']['ValueConfig']['DefaultValue'], Validators.required]
            })
          });
        } // UI layout #7 
        else if(calculation["UiValidationIndicator"] === uiLayout7) {
          const optionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout7, calculationTypeId) 
                                      ? null 
                                      : Validators.required
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              EndTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
              Tag: HelperMethodService.initTag(this, obj['AttributeAndValue']['ValueConfig']['Tag'])
            })
          });
        } // UI layout #8
        else if(calculation["UiValidationIndicator"] ===  uiLayout8) {
          const optionalValidation = HelperMethodService.findIdInArr(optionalValidationLayout8, calculationTypeId) 
                                      ? null 
                                      : Validators.required
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              StartTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['StartTimeConfig']),
              EndTimeConfig: HelperMethodService.initStartOrEndTimeConfig(this, obj['AttributeAndValue']['ValueConfig']['EndTimeConfig'], optionalValidation),
              ValueFromFileDefinition: HelperMethodService.initValueFromFileDefinition(this, obj['AttributeAndValue']['ValueConfig']['ValueFromFileDefinition'])
            })
          })

        } // UI layout #9 
        else if(calculation["UiValidationIndicator"] === uiLayout9) {
          return this.fb.group({
            ValueConfigId: [obj['AttributeAndValue']['ValueConfigId'] || 0, Validators.required],
            AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
            ValueConfig: this.fb.group({
              CalculationTypeId: [obj['AttributeAndValue']['ValueConfig']['CalculationTypeId'], validationOfCalculationTypeId],
              DefaultValue: [obj['AttributeAndValue']['ValueConfig']['DefaultValue'], Validators.required]
            })
          });
        } else {
          console.log("UI layout was not defined.");
        }
      }
    } else {
      return this.fb.group({
        ValueConfigId: [0, Validators.required],
        AttributeTypeId: [obj['AttributeTypeId'], Validators.required],
        ValueConfig: this.fb.group({
          CalculationTypeId: [null, validationOfCalculationTypeId],
        })
      })
    }
  }


  initCalculationTypesAllowed(obj: Object): FormArray {
    return this.fb.array([...obj['CalculationTypesAllowed'] ]);
  }

  // get StartTimeConfig in the method with the AttributeTypeId #6
  getStartTimeConfig(method: Object) {
    const startTime = method['AllowableAttributes'].find(attribute => {
      return attribute['AttributeTypeId'] === 6;
    });
    return startTime ? startTime['AttributeAndValue']['ValueConfig']['StartTimeConfig'] : null;
  }

  // get EndTimeConfig in the method with the AttributeTypeId #7
  getEndTimeConfig(method: Object) {
    const endTime = method['AllowableAttributes'].find(attribute => {
      return attribute['AttributeTypeId'] === 7;
    });
    return endTime ? endTime['AttributeAndValue']['ValueConfig']['EndTimeConfig'] : null;
  }


  handleMethodAdded(method, index): void {
    const lastIndex = this.methods.length;
    this.methods.push({ label: method['MethodName'], value: {id: lastIndex-1, method} });

    this.addMethodWithAttributes(method);
    this.configForm.controls['Methods']['controls'][index]['controls']['MethodId'].patchValue({id: lastIndex-1, method})
    this.onMethodChange(this.methods[lastIndex].value);
  }

  handleMethodDeleted(): void {
    console.log("Method should be deleted", this.selectedMethod);
  }

  // This action gets from Create Container Component when error
  // is received from the server while attempting to create a new container
  errorMsg(error) {
    console.log("Error occured while saving the container: ", error);
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Unavailable', detail: "There was problem to create container." });
  }

  // This function runs when a new container is created.
  getUpdatedContainers(response: Object) {
    console.log("Response data: ", response);
    HelperMethodService.handleResponseMessages(this, response);

    // get the list of updated containers
    if(response['ValidationResultsDTO'] === null) {
      this.getContainers();
    }
  }

  // The function for handling the list of containers
  getContainers(): void {
    this.lookupContainers$ = this.containerService.getAllContainers()
      .subscribe(
        containers => {
          this.selectedContainer = null;
          this.selectedMethod = null;
          this.methods = null;
          this.errorMessage = null;
          this.containers = containers.map((container) => {
            return { label: container['ContainerDisplayName'], value: container['ContainerKey'] } 
          });
          this.containers.unshift({label:'Select Container', value: null});
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

  getContainer(id): void {
    this.lookupContainer$ = this.containerService.getContainer(id)
      .subscribe(
        container => {
          this.errorMessage = null;
          this.container = container;
          let i = 0;
          this.selectedContainer = container;
          if(this.selectedContainer['Methods'] !== null) {
            this.selectedContainer['Methods'].forEach(method => {
              this.addMethodWithAttributes(method);
              this.methods.push({ label: method['MethodName'], value: {id: i++, method} })
            });
          } 
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

  getDataSources(): void {
    this.lookupDataSources$ = this.dataSourceNamesService.getDataSourceNames()
      .subscribe(
        dataSourceNames => {
          this.dataSources = dataSourceNames.map((source) => {
            return { label: source, value: source };
          });
          this.dataSources.unshift({ label: "Select or Type...", value: null });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );
  }

  getTags(): void {
    this.lookupTags$ = this.tagService.getAllTags()
      .subscribe(
        tags => {
          this.tags = tags.map((tag) => {
            return { label: tag['Name'], value: tag['Name'] }
          })
          this.tags.unshift({ label: "Select or Type...", value: null });
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
        responseData => {
          console.log("Response data: ", responseData);
          HelperMethodService.handleResponseMessages(this, responseData, "The container with methods was saved.");
          // get the list of updated containers
          if(responseData['ValidationResultsDTO'] === null) {
            this.selectedContainer = null;
            this.selectedMethod = null;
            this.methods = null;
            this.getContainers();
            this.getDataSources();
            this.getTags();
            // reset the form when json data are saved successfully
            this.configForm.reset();
          }
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

  // deleteContainerMethod(id) {
  //   this.deleteContainerMethod$ = this.methodService.deleteMethod(id)
  //     .subscribe(
  //       response => {
  //         const responseObject = response['Result'];
  //         if(responseObject === null) {
  //           this.successfulMsgs = [];
  //           this.successfulMsgs.push({ severity: 'success', summary: 'Success', detail: "The method was deleted." });
  //           this.getContainer(this.container['ContainerKey']);
  //         } else {
  //           this.msgs = [];
  //           this.errorMessage = responseObject["ErrorMessage"];
  //           this.msgs.push({ severity: 'error', summary: 'Failed', detail: `${this.errorMessage}` });
  //         }
  //       },
  //       error => {
  //         this.errorMessage = error;
  //         this.msgs = [];
  //         this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
  //       }
  //     );
  // }
}
