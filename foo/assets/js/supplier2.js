"use strict";
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.invoices = [];
        this.accountNumber = accountNumber;
    }
}
