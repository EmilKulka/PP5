import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  private API_BASE_URL: string = 'http://localhost:3000/customers'
  customersList: Customer[] = [];

  addCustomer(customer:Customer): Observable<any> {
    this.customersList.push(customer);

    return this.httpClient
    .post<any>(this.API_BASE_URL, customer)
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_BASE_URL)
    .pipe(
      map((customers: Customer[]) =>  
        customers.map((customer: Customer) => new Customer().deserialize(customer)) 
    )
    )
  }
}
