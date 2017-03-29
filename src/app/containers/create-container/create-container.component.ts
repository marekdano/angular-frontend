import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Container } from '../container.interface';
import { ContainerService } from '../container.service';
import { PlantAreaService } from '../../plant-area/plant-area.service';
import { ContainerTypeService} from '../../container-type/container-type.service';

import { SelectItem, Message } from 'primeng/primeng';

@Component({
  selector: 'app-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss']
})
export class CreateContainerComponent implements OnInit, OnDestroy {
  displayDialog: boolean;
  containerForm: FormGroup;
  displayExtraFields: boolean;
  plantAreas: SelectItem[] = [];
  containerTypes: SelectItem[] = [];
  errorMessage: string;
  msgs: Message[] = [];

  lookupPlantAreas$: any;
  lookupContainerTypes$: any;
  savingContainer$: any;

  @Input() label:string;
  @Output() errorMsg = new EventEmitter();
  @Output() containerAdded = new EventEmitter();
  
  constructor(private fb: FormBuilder, 
              private containerService: ContainerService,
              private plantAreaService: PlantAreaService,
              private containerTypeService: ContainerTypeService) { }

  ngOnInit() {
    this.containerForm = this.fb.group({
      ContainerName: this.fb.control("", [Validators.required]),
      PlantAreaName: this.fb.control("", [Validators.required]),
      ContainerTypeName: this.fb.control("", [Validators.required]),
      MaxQuantity: this.fb.control("", [Validators.required, Validators.pattern("[0-9]*")]),
      DefaultBatchName: this.fb.control(""),
      ContainerNumber: this.fb.control("", [Validators.required, Validators.pattern("[0-9]*")]),
      CurrentStatus: this.fb.control("")
    });
    
    this.lookupPlantAreas$ = this.plantAreaService.getAllPlantAreas()
      .subscribe(
        plantAreas => {
          this.plantAreas.push({ label: "Select...", value: null });
          plantAreas.forEach(item => {
            this.plantAreas.push({ label: item['PlantAreaName'], value: item['PlantAreaName'] });
          }); 
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );
    
    this.lookupContainerTypes$ = this.containerTypeService.getAllContainerTypes()
      .subscribe(
        containerTypes => {
          this.containerTypes.push({ label: "Select...", value: null });
          containerTypes.forEach(item => {    
            this.containerTypes.push({ label: item['ContainerTypeName'], value: item['ContainerTypeName'] });
          }); 
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
        }
      );

    this.displayExtraFields = false; 
  }

  ngOnDestroy() {
    console.log("CreateContainer component was destroyed.");
    if(this.lookupPlantAreas$) {
      this.lookupPlantAreas$.unsubscribe();
    }

    if(this.lookupContainerTypes$) {
      this.lookupContainerTypes$.unsubscribe();
    }

    if(this.savingContainer$) {
      this.savingContainer$.unsubscribe();
    }
  }

  showDialogToAdd() {
    this.containerForm.removeControl("SeedNumber");
    this.containerForm.removeControl("CreateCount");
    this.containerForm.reset({ MaxQuantity: 0, ContainerNumber: 0, DefaultBatchName: "", CurrentStatus: "" });
    this.displayDialog = true;
  }

  onSubmitContainer(value: Container, event: any): void {
    event.preventDefault();
    this.displayDialog = false;

    this.savingContainer$ = this.containerService.saveContainer(value)
      .subscribe(
        containerResponse => {
          this.containerAdded.emit(containerResponse);
        },
        error => {
          this.errorMessage = error;
          this.msgs.push({ severity:'error', summary: 'Unavailable', detail: this.errorMessage });
          this.errorMsg.emit(this.msgs);
        }
      );
      
    if(this.containerForm.contains("SeedNumber") && this.containerForm.contains("CreateCount")) {
      this.containerForm.removeControl("SeedNumber");
      this.containerForm.removeControl("CreateCount");
    }
    this.containerForm.reset({ MaxQuantity: 0, ContainerNumber: 0, DefaultBatchName: "", CurrentStatus: "" });
  }

  validateInput(event: KeyboardEvent): void {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character; prevent input
      event.preventDefault();
    }

    if(this.containerForm.contains("CreateCount")) {
      if(this.containerForm.controls['CreateCount'].value === 50) {
        // prevent not to type number higher than 50
        event.preventDefault();
      }
    }
  }

  // This function handle a "hash" character in the ContainerName field
  // to display two extra fields in the container form.
  onEnterChar(value: string): void {
    if(value && value.includes("#")) {
      this.displayExtraFields = true;
      this.containerForm.addControl("SeedNumber", new FormControl(1, [Validators.required, Validators.pattern("[0-9]*")] ));
      this.containerForm.addControl("CreateCount", new FormControl(1, [Validators.required, Validators.pattern("[0-9]*")] ));
    } else {
      this.displayExtraFields = false;
      this.containerForm.removeControl("SeedNumber");
      this.containerForm.removeControl("CreateCount");
    }
  }
}
