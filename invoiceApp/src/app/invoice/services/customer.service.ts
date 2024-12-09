import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customersList: Customer[] = [];

  addCustomer(customer:Customer) {
    this.customersList.push(customer);
  }

  getCustomers(): Customer[] {
    return this.customersList;
  }
}
