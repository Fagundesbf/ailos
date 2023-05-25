import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewCooperativeAdmissionComponent } from './new-cooperative-admission/new-cooperative-admission.component';

const routes: Routes = [
 {
  path: '',
  component: NewCooperativeAdmissionComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
