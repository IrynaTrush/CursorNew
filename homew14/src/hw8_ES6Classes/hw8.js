export class Student {
    constructor (university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.allMarks = [5, 4, 4, 5];
        this.isExpelled = false;
    }
    getInfo() {
        return `Студент ${this.university}, ${this.course}-го курсу, ${this.fullName}`;
    }
    get marks() {
        if (this.isExpelled) {
            return null;
        } 
        return this.allMarks;
    }
    set marks(value) {
        if(this.isExpelled) {
            return null;
        } 
        return this.allMarks.push(value);
    }
    getAverageMark() {
        return (this.allMarks.reduce((sum, item) => sum += item, 0)) / this.allMarks.length;
    }
    dismiss() {
        this.isExpelled = true;
    }
    recover() {
        this.isExpelled = false;
    }
}

export const pupil = new Student('ЛНМУ ім. Данила Галицького', 6, 'Іван Петров');