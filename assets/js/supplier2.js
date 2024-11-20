"use strict";
class Supplier extends Customer {
    constructor(accountNumber) {
        this.invoices = [];
        this.accountNumber = accountNumber;
    }
}
