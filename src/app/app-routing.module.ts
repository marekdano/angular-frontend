import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigFormComponent } from './config-form/config-form.component';
import { ContainerTableComponent } from './containers/container-table/container-table.component';
import { MethodTableComponent } from './methods/method-table/method-table.component';
import { CloningComponent } from './cloning/cloning.component';
import { PageNotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [ 
  { path: 'configuration', component: ConfigFormComponent },
  { path: '',   redirectTo: '/configuration', pathMatch: 'full' },
  { path: 'containers', component: ContainerTableComponent },
  //{ path: 'methods', component: MethodTableComponent }
  { path: 'cloning', component: CloningComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}