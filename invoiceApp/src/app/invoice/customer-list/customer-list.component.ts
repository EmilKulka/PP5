import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router) {
    this.customers = [];
  }
  ngOnDestroy(): void {
    console.log("FOO");
  }
  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

  redirectToForm() {
    this.router.navigate(["/invoice/customer-form"])
  }

  deletedCustomerEvent(customer: Customer) {
    this.customers = this.customers.filter(c => c.id !== customer.id);
  }



}
