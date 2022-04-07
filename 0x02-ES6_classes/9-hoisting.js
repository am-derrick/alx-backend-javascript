export class HolbertonClass {
    constructor(year, location) {
	this._year = year;
	this._location = location;
    }

    get year() {
	return this._year;
    }

    get location() {
	return this._location;
    }
}

export class StudentHolberton {
    constructor(firstName, lastName, holbertonClass) {
	this._firstName = firstName;
	this._lastName = lastName;
	this.holbertonClass = holbertonClass;
    }

    get fullName() {
	return `${this._firstName} ${this._lastName}`;
    }

    get holbetonClass() {
	return this._holbertonClass;
