import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InvoiceRoutingModule
  ],
  exports: [
    CustomerFormComponent,
    CustomerListComponent
  ]
})
export class InvoiceModule { }
