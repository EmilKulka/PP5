import { Unit } from "../enums/unit";
import { Tax } from "../enums/tax";

export class Invoice {
    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;

    constructor(name: string, quantity: number, unit: Unit, netto: number, tax: Tax, brutto: number) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.netto = netto;
        this.tax = tax;
        this.brutto = brutto;
    }

}