import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './customer-list/customer-list-element/customer-list-element.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent,
    CustomerListElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InvoiceRoutingModule,
    HttpClientModule
  ],
  exports: [
    CustomerFormComponent,
    CustomerListComponent
  ],
  providers: [
    CustomerService
  ]
})
export class InvoiceModule { }
