"use strict";
class Customer {
    constructor() {
        this.id = null;
        this.company = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.flatNumber = "";
        this.zipCode = "";
        this.comments = "";
        this.industry = "";
        this.active = true;
    }
    getAddress() {
        return `${this.nip} | ${this.zipCode} | ${this.city} | ${this.street}  ${this.houseNumber}/${this.flatNumber}`;
    }
}
