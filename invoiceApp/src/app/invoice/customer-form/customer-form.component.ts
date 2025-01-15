import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  saveData(form: NgForm) {
    if(form.valid) {
      this.customerService.addCustomer(this.customer)
      .subscribe((data: Customer) => {
        console.log(data)
      });

      this.router.navigate(['/invoice/customer-list']);
    }
  }
}
