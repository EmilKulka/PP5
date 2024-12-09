import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './customer-list/customer-list-element/customer-list-element.component';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent,
    CustomerListElementComponent
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
