import { Component, OnInit, OnDestroy } from '@angular/core';

import { SelectItem, Message } from 'primeng/primeng';
import { Container } from '../containers/container.interface';
import { ContainerService } from '../containers/container.service';
import { HelperMethodService } from '../shared/helper-methods.service';

@Component({
  selector: 'app-cloning',
  templateUrl: './cloning.component.html',
  styleUrls: ['./cloning.component.scss']
})
export class CloningComponent implements OnInit, OnDestroy {
  container: Container;
  containers: SelectItem[] = [];
  methods: SelectItem[] = [];
  // flatten values from the container for dataTable 
  values: Object[] = [];
  selectedContainer: any = null;
  selectedMethod: string = null;
  // check if destinatioUnitId exists in the container
  destinationUnitsExist: boolean = false;
  displaySeedAndCountFields: boolean = false;
  cloning: boolean = false;
  containerName: string = "";
  seedNumber: number = 0;
  createCount: number = 0;
  errorMessage: string;
  msgs: Message[] = [];
  successfulMsgs: Message[] = [];
  isLoading: boolean = true;

  lookupContainers$: any;
  lookupContainer$: any;
  savingContainerAndMethods$: any;
  savingContainerWithMethods$: any;


  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    console.log("Cloning component was initialized.");
    this.isLoading = true;
    this.msgs.push({ severity: 'info', summary: 'Retrieving data', detail: 'Loading data from server...' });
    this.getContainers();
  }

  ngOnDestroy() {
    console.log("Cloning component was destroyed.");
    if(this.lookupContainers$) {
      this.lookupContainers$.unsubscribe();
    }

    if(this.lookupContainer$) {
      this.lookupContainer$.unsubscribe(); 
    }

    if(this.savingContainerAndMethods$) {
      this.savingContainerAndMethods$.unsubscribe(); 
    }

    if(this.savingContainerWithMethods$) {
      this.savingContainerWithMethods$.unsubscribe(); 
    }
  }

  onSubmit(form) {
    this.isLoading = true;
    this.msgs = [];
    this.msgs.push({ severity: 'info', detail: 'Sending data...' });

    if('ClonedValue' in this.values[0]) {
      this.updateValueInContainer("ClonedValue");
      // update container fields: CreateCount, SeedNumber, ContainerName, ContainerKey
      this.container['SeedNumber'] = form.seedNumber;
      this.container['CreateCount'] = form.createCount;
      this.container['ContainerName'] = form.containerName;
      this.container['ContainerKey'] = null;
      
      this.saveNewContainerWithMethods(this.container);
    } else {
      this.updateValueInContainer("Value");
      this.saveContainerAndMethods(this.container);
    }  
    console.log("Container with methods sent: ", JSON.stringify(this.container));
  }

  onContainerChange(value: string): void {
    this.values = null;
    // display message while data are loaded from the server
    if(value != null) {
      this.isLoading = true;
      this.successfulMsgs = [], 
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Retrieving data', detail: 'Loading data from server...' });
      this.getContainer(value);
    } else {
      this.isLoading = false;
      this.container = this.values = null;
    }
  }

  onClone() {
    this.cloning = true;
    this.values = this.values.map(value => {
      value['ClonedValue'] = value['Value'];
      return value;
    })
  }

  // This function handle a "hash" character in the ContainerName field
  // to display two extra fields in the container form.
  onEnterChar(value: string): void {
    if(value && value.includes("#")) {
      this.seedNumber = this.createCount = 1;
      this.displaySeedAndCountFields = true;
    } else {
      this.seedNumber = this.createCount = 0;
      this.displaySeedAndCountFields = false;
    }
  }

  updateValueInContainer(field: string): void {
    this.values.forEach(value => {
      value['path'].split(".").reduce((obj, prop, index, arr) => {
        let isLast = (index === arr.length - 1);
        if(isLast) return obj[prop] = value[field];
        return obj[prop];
      }, this.container['Methods']);
    });
  }

  validateInput(event, form): void {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if(!pattern.test(inputChar)) {
      // invalid character; prevent input
      event.preventDefault();
    }
    
    // restrict the value of createCount to be less than 50 
    if(form.controls.createCount.value >= 50) {
      this.createCount = 50;
      // prevent input when the number is higher than 50
      event.preventDefault();
    }
  }

  getFlattenValues(): Object[] {
    let values = [];
    let valueConfigValue;
    let path;

    this.container['Methods'].forEach((method, methodIndex) => {
      path = `${methodIndex}`;
      
      if(method['DestinationUnitId']) {
        this.destinationUnitsExist = true;

        values.push({ MethodName: method['MethodName'], 
                      data1: "Destination Unit Id",
                      Value: method['DestinationUnitId'], 
                      path: path + ".DestinationUnitId" });
      }

      method['AllowableAttributes'].forEach((attribute, attributeIndex) => {
        path = `${methodIndex}.AllowableAttributes.${attributeIndex}`;
        
        if(attribute['AttributeAndValue']) {
          valueConfigValue = attribute['AttributeAndValue']['ValueConfig'];
          path += '.AttributeAndValue.ValueConfig';
    
          if(valueConfigValue['DefaultValue']) {
            values.push({ MethodName: method['MethodName'], 
                          AttributeName: attribute['AttributeTypeName'], 
                          ValueConfig: "DefaultValue", 
                          Value: valueConfigValue['DefaultValue'], 
                          path: path + ".DefaultValue" });
          }

          if(valueConfigValue['Tag']) {
            values.push({ MethodName: method['MethodName'], 
                          AttributeName: attribute['AttributeTypeName'], 
                          ValueConfig: "Tag",
                          data1: "Name",
                          Value: valueConfigValue['Tag']['Name'],
                          path: path + ".Tag.Name" });
          }

          if(valueConfigValue['SqlQuery']) {
            values.push({ MethodName: method['MethodName'], 
                          AttributeName: attribute['AttributeTypeName'], 
                          ValueConfig: "SqlQuery",
                          data1: "Query",
                          Value: valueConfigValue['SqlQuery']['Query'],
                          path: path + ".SqlQuery.Query" });
            values.push({ MethodName: method['MethodName'], 
                          AttributeName: attribute['AttributeTypeName'], 
                          ValueConfig: "SqlQuery",
                          data1: "Parameters",
                          Value: valueConfigValue['SqlQuery']['Parameters'],
                          path: path + ".SqlQuery.Parameters" });
          }

          if(valueConfigValue['ValueFromFileDefinition']) {
            values.push({ MethodName: method['MethodName'], 
                          AttributeName: attribute['AttributeTypeName'], 
                          ValueConfig: "ValueFromFileDefinition",
                          data1: "File Source",
                          data2: "File Full Name",
                          Value: valueConfigValue['ValueFromFileDefinition']['FileSource']['FileFullName'],
                          path: path + ".ValueFromFileDefinition.FileSource.FileFullName" });

            values.push({ MethodName: method['MethodName'], 
                          AttributeName: attribute['AttributeTypeName'], 
                          ValueConfig: "ValueFromFileDefinition",
                          data1: "Filter Column",
                          data2: "Filter Value",
                          Value: valueConfigValue['ValueFromFileDefinition']['FilterByColumn']['FilterValue'],
                          path: path + ".ValueFromFileDefinition.FilterByColumn.FilterValue" });
            
            values.push({ MethodName: method['MethodName'], 
                          AttributeName: attribute['AttributeTypeName'], 
                          ValueConfig: "ValueFromFileDefinition",
                          data1: "Filter Column",
                          data2: "Second Filter Value",
                          Value: valueConfigValue['ValueFromFileDefinition']['FilterByColumn']['OptionalSecondFilterValue'],
                          path: path + ".ValueFromFileDefinition.FilterByColumn.OptionalSecondFilterValue" });
          }

          if(valueConfigValue['StartTimeConfig']) {
            values = values.concat(this.getStartTimeOrEndTimeValues("StartTimeConfig", valueConfigValue, method, attribute, path));
          }

          if(valueConfigValue['EndTimeConfig']) {
            values = values.concat(this.getStartTimeOrEndTimeValues("EndTimeConfig", valueConfigValue, method, attribute, path));
          }
        }
      });
    });
    
    return values;
  }

  getStartTimeOrEndTimeValues(title: string, valueConfigValue: Object, method: Object, attribute: Object, path: string) {
    let values = [];

    if(valueConfigValue[title]['TimeFromTagDefinition']) {
      values.push({ MethodName: method['MethodName'], 
                    AttributeName: attribute['AttributeTypeName'], 
                    ValueConfig: title,
                    data1: "Tag",
                    data2: "Name",
                    Value: valueConfigValue[title]['TimeFromTagDefinition']['Tag']['Name'],
                    path: path + `.${title}.TimeFromTagDefinition.Tag.Name` });

      values.push({ MethodName: method['MethodName'], 
                    AttributeName: attribute['AttributeTypeName'], 
                    ValueConfig: title,
                    data1: "Value",
                    Value: valueConfigValue[title]['TimeFromTagDefinition']['Value'],
                    path: path + `.${title}.TimeFromTagDefinition.Value` });
    }

    if(valueConfigValue[title]['TimeFromSqlQuery']) {
      values.push({ MethodName: method['MethodName'], 
                    AttributeName: attribute['AttributeTypeName'], 
                    ValueConfig: title,
                    data1: "Query",
                    Value: valueConfigValue[title]['TimeFromSqlQuery']['Query'],
                    path: path + `.${title}.TimeFromSqlQuery.Query` });

      values.push({ MethodName: method['MethodName'], 
                    AttributeName: attribute['AttributeTypeName'], 
                    ValueConfig: title,
                    data1: "Parameters",
                    Value: valueConfigValue[title]['TimeFromSqlQuery']['Parameters'],
                    path: path + `.${title}.TimeFromSqlQuery.Parameters` });
    }

    if(valueConfigValue[title]['TimeFromFileDefinition']) {
      values.push({ MethodName: method['MethodName'], 
                    AttributeName: attribute['AttributeTypeName'], 
                    ValueConfig: title,
                    data1: "File Source",
                    data2: "File Full Name",
                    Value: valueConfigValue[title]['TimeFromFileDefinition']['FileSource']['FileFullName'],
                    path: path + `.${title}.TimeFromFileDefinition.FileSource.FileFullName` });
      
      if(valueConfigValue[title]['TimeFromFileDefinition']['FilterByColumn'] !== null) {
        values.push({ MethodName: method['MethodName'], 
                      AttributeName: attribute['AttributeTypeName'], 
                      ValueConfig: title,
                      data1: "Filter Column",
                      data2: "Filter Value",
                      Value: valueConfigValue[title]['TimeFromFileDefinition']['FilterByColumn']['FilterValue'],
                      path: path + `.${title}.TimeFromFileDefinition.FilterByColumn.FilterValue` });

        values.push({ MethodName: method['MethodName'], 
                      AttributeName: attribute['AttributeTypeName'], 
                      ValueConfig: title,
                      data1: "Filter Column",
                      data2: "Second Filter Value",
                      Value: valueConfigValue[title]['TimeFromFileDefinition']['FilterByColumn']['OptionalSecondFilterValue'],
                      path: path + `.${title}.TimeFromFileDefinition.FilterByColumn.OptionalSecondFilterValue` });
      }
    }

    return values;
  }

  // The function for handling the list of containers
  getContainers(): void {
    this.lookupContainers$ = this.containerService.getAllContainers()
      .subscribe(
        containers => {
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
          // set values to default
          this.errorMessage = null;
          this.destinationUnitsExist = false;
          this.containerName = "";
          this.seedNumber = this.createCount = 0;
          this.cloning = this.displaySeedAndCountFields = false;
          //console.log("Container: ", this.container);
          if(container['Methods'] !== null) {
            this.container = container;
            this.values = this.getFlattenValues();
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

  saveContainerAndMethods(objToBeSaved: Container): void {
    this.savingContainerAndMethods$ = this.containerService.saveContainerAndMethods(objToBeSaved)
      .subscribe(
        responseData => {
          console.log("Response data: ", responseData);
          HelperMethodService.handleResponseMessages(this, responseData, "The container with methods was saved.");
          if(responseData['ValidationResultsDTO'] === null) {
            this.container = responseData['ContainerDTOs'][0];
            this.errorMessage = null;
            this.destinationUnitsExist = false;
            this.values = this.getFlattenValues();
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

  saveNewContainerWithMethods(objToBeSaved: Container): void {
    this.savingContainerWithMethods$ = this.containerService.saveContainerWithMethods(objToBeSaved)
      .subscribe(
        responseData => {
          console.log("Response data: ", responseData);
          HelperMethodService.handleResponseMessages(this, responseData, "The container with methods was saved.");
          if(responseData['ValidationResultsDTO'] === null) {
            // reset values to default
            this.errorMessage = null;
            this.destinationUnitsExist = false;
            this.containerName = "";
            this.seedNumber = this.createCount = 0;
            this.displaySeedAndCountFields = false;
            this.cloning = false;
            this.getContainers();
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

}
