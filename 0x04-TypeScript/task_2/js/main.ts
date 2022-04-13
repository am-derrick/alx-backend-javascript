export interface DirectorInterface {
     workFromHome(): string;
     getCoffeeBreak(): string;
     workDirectorTasks(): string;
}

export interface TeacherInterface {
     workFromHome(): string;
     getCoffeeBreak(): string;
     workTeacherTasks(): string;
}

class Director implements DirectorInterface {
     workFromHome: string;
     getToWork: string;
     workDirectorTasks: string;
     constructor(workFromHome: string, getToWork: string, workDirectorTasks: string) {
     	this.workFromHome = workFromHome;
	this.getToWork = getToWork;
	this.workDirectorTasks = workDirectorTasks;
	}

     workFromHome() { return 'WorkingFrom Home'; }
     getToWork() { return 'Getting a coffee break'; }
     workDirectorTasks() { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
    workFromHome: string;
    getCoffeeBreak: string;
    workTeacherTasks: string;
    constructor(workFromHome: string, getCoffeeBreak: string, workTeacherTasks: string) {
        this.workFromHome = workFromHome;
	this.getCoffeeBreak = getCoffeeBreak;
	this.workTeacherTasks = workTeacherTasks;
	}

	workFromHome() { return 'Cannot work from home'; }
	getCoffeeBreak() { return 'Cannot have a break'; }
	workTeacherTasks() { return 'Getting to work'; }
}

export function createEmployee(salary: number | string) : (Teacher | Director) {
       if (typeof salary === 'number' && salary < 500) {
       	  return 'Teacher';
	}
	return 'Director';
}

export isDirector(employee) {
       employee: Director;
}

export executeWork(employee) : (Director | Teacher) {
       if (typeof employee === isDirector) {
       	  worDirectorTasks();
	}
	workTeacherTasks();
}

type Subjects = 'Math' | 'History';

class teachClass(todayClass: 'Math' | 'History') {
      if (typeof todayClass === 'Math') {
      	 return 'Teaching Math';
	 }
      return 'Teaching History';
}