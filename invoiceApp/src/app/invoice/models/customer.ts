export class Customer {
    id: number | null = null;
    company: string = "";
    nip: string = "";
    city: string = "";
    street: string = "";
    houseNumber: string = "";
    flatNumber: string = "";
    zipCode: string = "";
    comments: string = "";
    industry: string = "";
    active: boolean = true;

    getAddress(): string {
        return `${this.company}`;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    // return `${this.nip} | ${this.zipCode} | ${this.city} | ${this.street} ${this.houseNumber}/${this.flatNumber}`;
}