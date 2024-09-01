

const mark = {
    numele: 'Ganea',
    prenumele: 'Mark',
    masa: 78,
    inaltimea: 1.69,
    bmi: 0,
    calcBMI () {
        this.bmi = this.masa / (this.inaltimea * this.inaltimea);
        return this.bmi;
    }
}

const vasile = {
    numele: 'Vasile',
    prenumele: 'Cibotaru',
    masa: 92,
    inaltimea: 1.95,
    bmi: 0,
    calcBMI () {
        this.bmi =  this.masa / (this.inaltimea * this.inaltimea);
        return this.bmi;
    }
}
//console.log(mark.calcBMI());
//console.log(vasile.calcBMI());
console.log(`BMI-ul lui ${mark.numele} ${mark.prenumele} (${mark.calcBMI()}) este mai mare decat cel al lui ${vasile.numele} ${vasile.prenumele} (${vasile.calcBMI()})!`);