import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Message } from 'primeng/primeng';
import { ContainerService } from '../container.service';
import { Container } from '../container.interface';
import { OrbisContainer } from '../orbis-container.class';

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
  label:string;
  displayDialog: boolean;
  lookupContainers$: any;
  lookupContainer$: any;
  updateContainer$: any;

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
    console.log("ContainerTable component was destroyed");
    if(this.lookupContainers$) {
      this.lookupContainers$.unsubscribe();
    }

    if(this.lookupContainer$) {
      this.lookupContainer$.unsubscribe();
    }

    if(this.updateContainer$) {
      this.updateContainer$.unsubscribe();
    }
  }

  getContainers() {
    this.lookupContainers$ = this.containerService.getAllContainers()
      .subscribe(
        containers => {
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
    console.log("Save was hit");
    console.log("Value of edited container", value);

    this.updateContainer$ = this.containerService.saveContainerAndMethods(value)
      .subscribe(
        data => {
          //this.containers.push(this.container);
          console.log("Container was updated!");
          this.getContainers();
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );

    this.container = null;
    this.displayDialog = false;
  }
    
  onDelete() {
    console.log("Delete was hit");
    this.container = null;
    this.displayDialog = false;
  }    

  onRowSelect(event) {
    this.displayDialog = true;

    this.lookupContainer$ = this.containerService.getContainer(event.data.ContainerKey)
      .subscribe(
        container => {
          this.container = container;
          console.log("Selected Container: ", container);
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
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
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

}
