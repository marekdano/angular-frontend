import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ContainerService } from '../container.service';
import { HelperMethodService } from '../../shared/helper-methods.service';
import { Container } from '../container.interface';
import { OrbisContainer } from '../orbis-container.class';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-container-table',
  templateUrl: './container-table.component.html',
  styleUrls: ['./container-table.component.scss']
})
export class ContainerTableComponent implements OnInit, OnDestroy {
  containers: Container[];
  container: Container = new OrbisContainer('','','',0,'',0);
  selectedContainer: Container;
  containerForm: FormGroup;
  errorMessage: string;
  isLoading: boolean = true;
  msgs: Message[] = [];
  successfulMsgs: Message[] = [];
  label: string;
  displayDialog: boolean;
  lookupContainers$: any;
  lookupContainer$: any;
  updateContainer$: any;
  deleteContainer$: any;

  constructor(private fb: FormBuilder,
              private containerService: ContainerService) { }

  ngOnInit() {
    this.label = "Add";
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Retrieving data', detail: 'Loading all containers...'});

    this.containerForm = this.fb.group({
      ContainerKey: this.fb.control(""),
      ContainerName: this.fb.control("", [Validators.required]),
      PlantAreaName: this.fb.control("", [Validators.required]),
      ContainerTypeName: this.fb.control("", [Validators.required]),
      MaxQuantity: this.fb.control("", [Validators.required, Validators.pattern("[0-9]*")]),
      DefaultBatchName: this.fb.control(""),
      ContainerNumber: this.fb.control("", [Validators.required, Validators.pattern("[0-9]*")])
    });

    this.getContainers();
  }

  ngOnDestroy() {
    console.log("ContainerTable component was destroyed.");
    if(this.lookupContainers$) {
      this.lookupContainers$.unsubscribe();
    }

    if(this.lookupContainer$) {
      this.lookupContainer$.unsubscribe();
    }

    if(this.updateContainer$) {
      this.updateContainer$.unsubscribe();
    }

    if(this.updateContainer$) {
      this.updateContainer$.unsubscribe();
    }
  }

  getContainers() {
    this.lookupContainers$ = this.containerService.getAllContainers()
      .subscribe(
        containers => {
          this.errorMessage = null;
          this.containers = containers;
        }, 
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        },
        /* onComplete */ 
        () => this.isLoading = false
      );
  }

  onEdit(value) { 
    this.updateContainer$ = this.containerService.updateContainer(value)
      .subscribe(
        response => {
          console.log("Response from Update request: ", response);
          HelperMethodService.handleResponseMessages(this, response, "The container was updated.");
          if(response['ValidationResultsDTO'] === null) {
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

    this.container = null;
    this.displayDialog = false;
  }
    
  onDelete(id) {
    this.container = null;
    this.displayDialog = false;
    this.containerService.deleteContainer(id)
      .subscribe(
        response => {
          console.log("Response from DELETE request: ", response);
          HelperMethodService.handleResponseMessages(this, response, "The container was deleted.");
          if(response['ValidationResultsDTO'] === null) {
            this.containers.splice(this.findSelectedContainerIndex(), 1);
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

  onRowSelect(event) {
    this.displayDialog = true;
    this.container = null;
    this.containerForm.reset();
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Retrieving data', detail: 'Loading the container...'});
    this.isLoading = true;

    this.lookupContainer$ = this.containerService.getContainer(event.data.ContainerKey)
      .subscribe(
        container => {
          this.container = container;
          this.containerForm
            .reset({
              ContainerKey: this.container["ContainerKey"],
              ContainerName: this.container['ContainerName'],
              PlantAreaName: this.container['PlantAreaName'],
              MaxQuantity: this.container['MaxQuantity'],
              ContainerTypeName: this.container['ContainerTypeName'],
              DefaultBatchName: this.container['DefaultBatchName'],
              ContainerNumber: this.container['ContainerNumber'],
              Methods: this.container['Methods']
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

  validateInput(event) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
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

  findSelectedContainerIndex(): number {
    return this.containers.indexOf(this.selectedContainer);
  }

}
