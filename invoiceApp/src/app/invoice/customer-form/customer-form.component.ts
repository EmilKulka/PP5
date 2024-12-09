import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  standalone: false
})

export class CustomerFormComponent {

  constructor(private customerService: CustomerService, private router: Router) {
    
  }

  customer: Customer = new Customer();

  saveData() {
    this.customerService.addCustomer(this.customer);
    this.router.navigate(['/invoice/customer-list']);

  }
}
