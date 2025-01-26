const grades = [];

let randomGrade = Array.from({length:12}, ()=> Math.floor((Math.random()*100)+1));
grades.push(...randomGrade);

console.log(grades);
document.getElementById('array').textContent = `Выставленные оценки: ${grades}`;

let sumGrades = 0;

grades.forEach((grade) =>{
    sumGrades += grade;
});

let averageGrade = Math.round(sumGrades / grades.length);

console.log(averageGrade);
document.getElementById('average').textContent = `Средний балл: ${averageGrade}`;

let sortedGrades = grades.sort((a,b)=> {return a-b});

document.getElementById('max').textContent = `Максимальный балл: ${sortedGrades[sortedGrades.length-1]}`;

document.getElementById('min').textContent = `Миинимальный балл: ${sortedGrades[0]}`;

let filteredGrades = grades.filter(grade => grade >= 60);

console.log(filteredGrades)

document.getElementById('positiveResult').textContent =`Количество студентов, получивших положительный результат (больше 60 баллов): ${filteredGrades.length}`;

let filteredGradesNegative = grades.filter(grade => grade < 60);

document.getElementById('negativeResult').textContent =`Количество студентов, получивших отрицательный результат (менее 60 баллов): ${filteredGradesNegative.length}`;

console.log(grades);

const letterArr = grades.map((function(grade){
    if (grade<100 && grade>=80) {return 'A'}
    else if (grade<80 && grade>=60) {return 'B'}
    else if (grade<60 && grade>=40) {return 'C'}
    else if (grade<40 && grade>=20) {return 'D'}
    else {return 'E'}
}));

document.getElementById('letterScaleArr').textContent = `Оценки в буквенном формате: ${letterArr}`;