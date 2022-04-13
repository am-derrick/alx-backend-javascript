//teacher interface
export interface Teacher {
     firstName: string;
     lastName: string;
     fullTimeEmployee: boolean;
     yearsOfExperience?: number;
     location: string;
     [propNme: string]: any;
}

//director interface that extends teacher
export interface Directors extends Teacher {
     numberOfReports: number;
}

//printTeacherFunction interface
export interface printTeacherFunction {
     (firstName: string, lastName: string): string;
}

//printing teacher
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
      return `${firstName[0]}. ${lastNmae}`;
};

//studentClass class
export class StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
       firstName: string;
       lastName: string;
       constructor(firstName: string, lastNmae: string) {
		this.firstName = firstName;
		this.firstName = lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this.firstName;
	}

export interface StudentClassInterface {
       readonly firstName: string;
       readonly lastName: string;
       workOnHomework(): string;
       displayName(): string;
}

export interface StudentConstructor {
       new(firstName: string, lastName: string): StudentClassInterface;
}