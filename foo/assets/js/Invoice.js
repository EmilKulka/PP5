"use strict";
class Invoice {
    constructor(name, quantity, unit, netto, tax, brutto) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.netto = netto;
        this.tax = tax;
        this.brutto = brutto;
    }
}
