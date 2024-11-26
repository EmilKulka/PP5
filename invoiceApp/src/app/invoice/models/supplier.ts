import { Customer } from "./customer";
import { Invoice } from "./invoice";
export class Supplier extends Customer {
    accountNumber: string;
    invoices: Invoice[] = [];

    constructor(accountNumber: string) {
        super(); 
        this.accountNumber = accountNumber;
    }
}