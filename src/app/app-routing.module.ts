import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigFormComponent } from './config-form/config-form.component';
import { ContainerTableComponent } from './containers/container-table/container-table.component';
import { MethodTableComponent } from './methods/method-table/method-table.component';


const routes: Routes = [ 
  { path: '', component: ConfigFormComponent, pathMatch: 'full' },
  { path: 'containers', component: ContainerTableComponent }
  //{ path: 'methods', component: MethodTableComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}