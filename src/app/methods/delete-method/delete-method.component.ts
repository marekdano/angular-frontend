import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-method',
  templateUrl: './delete-method.component.html',
  styleUrls: ['./delete-method.component.scss']
})
export class DeleteMethodComponent implements OnInit {
  displayDialog: boolean = false;

  @Output() methodDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showDialogToDelete() {
    this.displayDialog = true;
  }

  onSubmitDeleteMethod(event: any) {
    console.log("event: ", event);
    event.preventDefault(); 
    //event.preventDefault ? event.preventDefault() : event.returnValue = false; // set up for IE
    this.displayDialog = false;
    this.methodDeleted.emit();
  }

}
