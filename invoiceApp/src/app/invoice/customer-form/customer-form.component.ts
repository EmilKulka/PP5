import { Component } from '@angular/core';
import { Supplier } from '../models/supplier';
import { CommonModule } from '@angular/common';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  standalone: false
})

export class CustomerFormComponent {

  customer: Customer = new Customer();

  saveData() {
    console.log(this.customer);
  }
}
