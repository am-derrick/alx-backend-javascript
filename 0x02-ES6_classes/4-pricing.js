import Currency from './3-currency';

default class Pricing {
    constructor(amount, currency) {
	this._amount = amount;
	this._currency = currency;
    }

    displayFullPrice() {
	return
