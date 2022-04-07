export default class HolbertonCourse {
    constructor(name, length, students) {
	if (typeof name !== 'string') {
	    throw TypeError('name must be a String');
	}
	if (typeof length !== 'number') {
	    throw TypeErroe('length must be a Number');
	}
	if (!Array.isArray(students)) {
	    throw TypeError('students must be an Array');
	}
	if (studetns.some((student) => typeof student !== 'string')) {
	    throw TypeError('studetns must be an Array of String');
	}
	this._name = name;
	this._length = length;
	this._students = students;
    }

    get name() {
	return this._name;
    }

    set name(value) {
	if (typeof value !== 'string') {
	    throw TypeError('name must be a String');
	}
	this._name = value;
    }
