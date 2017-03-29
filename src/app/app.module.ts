import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule, 
         ButtonModule, 
         DropdownModule, 
         SpinnerModule, 
         DialogModule, 
         DataTableModule, 
         SharedModule,
         GrowlModule,
         TooltipModule,
         InputTextareaModule,
         CheckboxModule,
         RadioButtonModule } from 'primeng/primeng';

import { ConfigFormComponent } from './config-form/config-form.component';
import { ContainerTableComponent } from './containers/container-table/container-table.component';
import { MethodTableComponent } from './methods/method-table/method-table.component';
import { CreateContainerComponent } from './containers/create-container/create-container.component';
import { CreateMethodComponent } from './methods/create-method/create-method.component';
import { CalculationTypeComponent } from './calculation-type/calculation-type.component';
import { UiLayoutOneComponent } from './ui-layouts/ui-layout-one/ui-layout-one.component';
import { UiLayoutTwoComponent } from './ui-layouts/ui-layout-two/ui-layout-two.component';
import { UiLayoutThreeComponent } from './ui-layouts/ui-layout-three/ui-layout-three.component';
import { UiLayoutFourComponent } from './ui-layouts/ui-layout-four/ui-layout-four.component';
import { UiLayoutSixComponent } from './ui-layouts/ui-layout-six/ui-layout-six.component';
import { UiLayoutSevenComponent } from './ui-layouts/ui-layout-seven/ui-layout-seven.component';
import { UiLayoutNineComponent } from './ui-layouts/ui-layout-nine/ui-layout-nine.component';
import { CloningComponent } from './cloning/cloning.component';

import { ContainerService } from './containers/container.service';
import { MethodService } from './methods/method.service';
import { PlantAreaService } from './plant-area/plant-area.service';
import { ContainerTypeService } from './container-type/container-type.service';
import { MethodTypeService } from './method-type/method-type.service';
import { CalculationTypeService } from './calculation-type/calculation-type.service';
import { ConditionService } from './condition/condition.service';
import { FrequencyService } from './frequency/frequency.service';
import { TimeUnitService } from './time-unit/time-unit.service';
import { TimeConfigTypeService } from './time-config-type/time-config-type.service';
import { AttributePropertyService } from './attribute-property/attribute-property.service';
import { DataSourceNamesService } from './shared/data-source-names.service';

import { FileTypeService } from './file-type/file-type.service';
import { QueryTypeService } from './query-type/query-type.service';
import { TagService } from './tag/tag.service';

import { TtLayoutFourComponent } from './time-type-layouts/tt-layout-four/tt-layout-four.component';
import { TtLayoutFiveComponent } from './time-type-layouts/tt-layout-five/tt-layout-five.component';
import { TtLayoutSixComponent } from './time-type-layouts/tt-layout-six/tt-layout-six.component';
import { AttributesComponent } from './attributes/attributes.component';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { UiLayoutFiveComponent } from './ui-layouts/ui-layout-five/ui-layout-five.component';
import { UiLayoutEightComponent } from './ui-layouts/ui-layout-eight/ui-layout-eight.component';
import { TtLayoutOneComponent } from './time-type-layouts/tt-layout-one/tt-layout-one.component';
import { TtLayoutTwoComponent } from './time-type-layouts/tt-layout-two/tt-layout-two.component';
import { TtLayoutThreeComponent } from './time-type-layouts/tt-layout-three/tt-layout-three.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { DeleteMethodComponent } from './methods/delete-method/delete-method.component';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/switchMap';

@NgModule({
  declarations: [
    AppComponent,
    ConfigFormComponent,
    ContainerTableComponent,
    MethodTableComponent,
    CreateContainerComponent,
    CreateMethodComponent,
    CalculationTypeComponent,
    UiLayoutOneComponent,
    TtLayoutSixComponent,
    TtLayoutFiveComponent,
    AttributesComponent,
    UiLayoutTwoComponent,
    UiLayoutThreeComponent,
    UiLayoutFourComponent,
    UiLayoutSixComponent,
    UiLayoutSevenComponent,
    UiLayoutNineComponent,
    TtLayoutFourComponent,
    UiLayoutFiveComponent,
    UiLayoutEightComponent,
    TtLayoutOneComponent,
    TtLayoutTwoComponent,
    TtLayoutThreeComponent,
    CloningComponent,
    PageNotFoundComponent,
    DeleteMethodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    SpinnerModule,
    DialogModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    TooltipModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    AppRoutingModule
  ],
  providers: [
    ContainerService,
    MethodService, 
    PlantAreaService, 
    ContainerTypeService,
    MethodTypeService,
    CalculationTypeService,
    ConditionService,
    FrequencyService,
    TimeUnitService,
    TimeConfigTypeService,
    AttributePropertyService,
    DataSourceNamesService,
    FileTypeService,
    QueryTypeService,
    TagService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
