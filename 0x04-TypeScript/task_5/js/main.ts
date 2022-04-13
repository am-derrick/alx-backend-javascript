interface MajorCredits {
    credits: number;
    _majorBrand: 'major';
}

interface MinorCredits {
    credits: number;
    _minorBrand: 'minor';
}

function sumMajorCredits(subject1: mMjorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}

const Physics = { credits: 4 } as MajorCredits;
const Chemistry = { credits: 4 } as MajorCredits;
const Biology = { credits: 3 } as MinorCredits;
const Literature = { credits: 1 } as MinorCredits;

console.log(sumMajorCredits(Physics, Chemistry));
console.log(sumMinorCredits(Biology, Literature));
