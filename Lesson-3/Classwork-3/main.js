/* зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
    1. перебрати його циклом while
    2. перебрати його циклом for */

let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length) {
    console.log (arr [i]);
    i++;
}

/* у зворотньому порядку */

let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = arr.length - 1;
while (i >= 0) {
    console.log (arr [i]);
    i--;
}


let arr = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < arr.length; i++) {
    console.log (arr [i]);
}

/* у зворотньому порядку */

let arr = [2,17,13,6,22,31,45,66,100,-18];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log (arr [i]);
}


/* зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення */

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr.length) {
    if (i % 2 === 1) {
        console.log(arr [i]);
    }
    i++;
}

/* у зворотньому порядку */

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length - 1;
while (i >= 0) {
    if (i % 2 === 1) {
        console.log(arr [i]);
    }
    i--;
}

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr.length) {
    if (i % 2 === 0) {
        console.log(arr [i]);
    }
    i++;
}

/* у зворотньому порядку */

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length - 1;
while (i >= 0) {
    if (i % 2 === 0) {
        console.log(arr [i]);
    }
    i--;
}

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
        console.log (arr [i]);
    }
}

/* у зворотньому порядку */

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 === 1) {
        console.log (arr [i]);
    }
}

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        console.log (arr [i]);
    }
}


/* у зворотньому порядку */

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log (arr [i]);
    }
}



/* зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) */

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < arr.length; i++) {
    if (arr [i] % 3 === 0) {
        arr [i] = 'okten';
        console.log (arr [i]);
    }
}
console.log (arr);

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
            console.log (arr [i]);
    }

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr [i] % 3 === 0) {
        arr [i] = 'okten';
        console.log (arr [i]);
    }
}
console.log (arr);





