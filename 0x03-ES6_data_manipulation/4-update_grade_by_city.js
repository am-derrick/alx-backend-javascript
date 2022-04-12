export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students)) {
	return [];
    }
    if (!Array.isArray(newGrades)) {
	return [];
    }
    if (Array.isArray(students)) {
	return students
	    .filter((student) => student.location === city)
	    .map((student) => {
		const[newGrade] = newGrade.filter((item) => item.studentId === student.id);
		return {
		    ...student,
		    grade: newGrade ? newGrade.grade: 'N/A',
		};
	    });
    }
}
