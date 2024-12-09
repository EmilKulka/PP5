import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router) {
    this.customers = this.customerService.getCustomers();
  }

  redirectToForm() {
    this.router.navigate(["/invoice/customer-form"])
  }



}
