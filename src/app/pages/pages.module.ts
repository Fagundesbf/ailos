import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';

import { NewCooperativeAdmissionComponent } from './new-cooperative-admission/new-cooperative-admission.component';
import { CardComponent } from '../components/card/card.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';




@NgModule({
  declarations: [
    NewCooperativeAdmissionComponent,


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CardComponent,

  ], providers:[
    provideEnvironmentNgxMask(),
  ]
})
export class PagesModule { }
