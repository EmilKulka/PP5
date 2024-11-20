class Customer {
    id = null;
    company = "";
    nip = "";
    city = "";
    street = "";
    houseNumber = "";
    flatNumber = "";
    zipCode = "";
    comments = "";
    industry = "";
    active = true;

    getAddress() {
        return `${this.nip} | ${this.zipCode} | ${this.city} | ${this.street}  ${this.houseNumber}/${this.flatNumber}`
    }
}