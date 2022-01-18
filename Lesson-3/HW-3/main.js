/* --створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль */

let array = [15, 25, 40, 36, 73];
let arr = ['one', 'two', 'three', 'four', 'five'];
let a = [12, 15, 'December', 'okten', true];
console.log (array);
console.log (arr);
console.log (a);

/* -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль */

let array = [];
array[0] = 'Monday';
array[1] = 'Tuesday';
array[2] = 'Wednesday';
array[3] = 'Thursday';
array[4] = 'Friday';
console.log (array);


/* - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині */
/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині */

for (let i = 1; i < 11; i++) {
    document.write (`<div>блок</div>`);
}

for (let i = 1; i < 11; i++) {
    document.write (`<div>блок ${i}</div>`);
}


/* - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині. */

let i = 0;
while (i < 20) {
    document.write (`<h1>блок</h1>`);
    i++;
}


let i = 0;
while (i < 20) {
    document.write (`<h1>блок ${i}</h1>`);
    i++;
}


/* - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. */

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < array.length; i++) {
    console.log (array [i]);
}

let array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let i = 0; i < array.length; i++) {
    console.log (array [i]);
}

let array = ['one', 2, 'three', 4, 'five', true, 'seven', false, 'nine', 10];
for (let i = 0; i < array.length; i++) {
    console.log (array [i]);
}


/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи */

let array = ['one', 2, 'three', 4, 'five', true, 'seven', false, 'nine', 10];
for (let i = 0; i < array.length; i++) {
    if (typeof array [i] === 'boolean') {
        console.log (array [i]);
    }
}


let array = ['one', 2, 'three', 4, 'five', true, 'seven', false, 'nine', 10];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        console.log (array [i]);
    }
}

let array = ['one', 2, 'three', 4, 'five', true, 'seven', false, 'nine', 10];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
        console.log (array [i]);
    }
}


/* - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/

let emptyArray = [];
emptyArray [0] = 'one';
emptyArray [1] = true;
emptyArray [2] = 3;
emptyArray [3] = 'four';
emptyArray [4] = 5;
emptyArray [5] = 6;
emptyArray [6] = 'seven';
emptyArray [7] = 8;
emptyArray [8] = false;
emptyArray [9] = 10;

for (let i = 0; i < emptyArray.length; i++) {
    console.log (emptyArray [i]);
}


/* Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write */

for (let i = 0; i < 10; i++) {
    console.log (`номер кроку: ${i} `);
    document.write (`номер кроку: ${i} `);
}

for (let i = 0; i < 100; i++) {
    console.log ('номер кроку: ' + i + ' ');
    document.write ('номер кроку: ' + i + ' ');
}


for (let i = 0; i < 100; i += 2) {
    console.log (`номер кроку: ${i} `);
    document.write (`номер кроку: ${i} `);
}


/* - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write */

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log (`номер кроку: ${i} `);
        document.write (`номер кроку: ${i} `);
    }
}


for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log (`номер кроку: ${i} `);
        document.write (`номер кроку: ${i} `);
    }
}

