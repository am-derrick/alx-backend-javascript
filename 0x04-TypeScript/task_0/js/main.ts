interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent: Student = {
        firstName: 'Brian',
	lastName: 'Mugisha',
	age: 26,
	location: 'Kampala'
}

const secondStudent: Student = {
        firstName: 'John',
	lastName: 'Olwero',
	age: 30,
	loaction: 'Nairobi'
}

const studentList = [firstStudent, secondStudent];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSelectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableHeaderCellElement = row.insertCell(0);
const th2: HTMLTableHeaderCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First name</b>");
th2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSelectionElement = table.createTBody();
studentList.map((student) => {
	const newRow: HTMLTableRowElement = body.insertRow();
	const firstNameRow: HTMLTableCellElement = newRow.insertCell();
	const locationRow: HTMLTableCellElement = newRow.insertCell();
	firstNameRow.innerHTML = student.firstName;
	locationRow.innertHTML = student.location;
})