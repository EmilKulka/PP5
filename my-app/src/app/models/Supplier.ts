import { Customer } from "./Customer";
export class Supplier extends Customer {
    accountNumber: string;
    invoices: string[] = [];

    constructor(accountNumber: string) {
        super(); 
        this.accountNumber = accountNumber;
    }
}