import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem, Message } from 'primeng/primeng';

import { HelperMethodService } from '../../shared/helper-methods.service';
import { ContainerService } from '../../containers/container.service';
import { MethodTypeService } from '../../method-type/method-type.service';


@Component({
  selector: 'app-create-method',
  templateUrl: './create-method.component.html',
  styleUrls: ['./create-method.component.scss']
})
export class CreateMethodComponent implements OnInit, OnDestroy {
  displayDialog: boolean;
  methodForm: FormGroup;
  methodTypes: SelectItem[] = [];
  selectedMethod: string;
  errorMessage: string;
  msgs: Message[];
  lookupMethodTypes$: any;

  @Input('unique-methods-defined') uniqueMethodsDefined: number[]; 
  @Output() methodAdded = new EventEmitter();

  constructor(private fb: FormBuilder, 
              private containerService: ContainerService,
              private methodTypeService: MethodTypeService) { }

  ngOnInit() {
    console.log("CreateMethod component was initialized.");
    this.methodForm = this.fb.group({
      MethodTypeId: this.fb.control(null, [Validators.required]),
      MethodName: this.fb.control(null, [Validators.required])
    });

    this.methodTypes = [];
    this.methodTypes.push({ label:'Select Method Type', value:null });

    this.lookupMethodTypes$ = this.methodTypeService.getAllMethodTypes()
      .subscribe(
        methodTypes => {
          methodTypes.forEach(methodType => {
            if(!HelperMethodService.findIdInArr(this.uniqueMethodsDefined, methodType['Id'])) {
              this.methodTypes.push({label: methodType['MethodTypeName'], value: methodType['Id']});
            }
          });
        },
        error => {
          this.errorMessage = error;
          this.msgs = [];
          this.msgs.push({severity:'error', summary: 'Unavailable', detail: this.errorMessage});
        }
      );    
  }

  ngOnDestroy() {
    console.log("CreateMethod component was destroyed.");
    if(this.lookupMethodTypes$) {
      this.lookupMethodTypes$.unsubscribe();
    }
  }

  showDialogToAdd() {
    this.methodForm.reset();
    this.displayDialog = true;
  }

  onSubmitMethod(value: FormGroup, event: any) {
    event.preventDefault(); 
    //event.preventDefault ? event.preventDefault() : event.returnValue = false; // set up for IE
    this.displayDialog = false;
    this.methodAdded.emit(value)
  }
}
