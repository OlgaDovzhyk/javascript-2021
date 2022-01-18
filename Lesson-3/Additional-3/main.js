/* 1. Створити пустий масив та :
    a. заповнити його 50 парними числами за допомоги циклу.
    b. заповнити його 50 непарними числами за допомоги циклу.
    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS) */

let array = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        array[i] = i;
    }
}
console.log(array);


let array = [];
for (let i = 0; i < 50; i++){
    if (i % 2 === 1) {
        array[i] = i;
    }
}
console.log(array);


let array = [];
for (let i = 0; i < 20; i++) {
    array[i] = Math.random(i);
}
console.log (array);

array = [];
for (let i = 0; i < 20; i++){
    array[i] = Math.floor((Math.random()*(732-8))+8);
}
console.log(array);


/* 2. Вивести за допомогою console.log кожен третій елемен
3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив */

let array = [];
for (let i = 0; i < 50; i+=3) {
    array[i] = i;
    console.log (array[i]);
}


let array = [];
for (let i = 0; i < 50; i+=3) {
    if (i % 2 === 0) {
        array[i] = i;
        console.log(array[i]);
    }
}


let array = [];
let newArray = [];
for (let i = 0 ; i < 50; i+=3){
    if (i % 2 === 0){
        array[i] = i;
        newArray.push(array[i]);
    }
}
console.log(newArray);


/* 5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56 */

let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < array.length; i++) {
    if(array[i + 1] % 2 === 0){
        console.log(array[i]);
    }
}

/* 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/

let array = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];

}
console.log(sum);
sum = sum / array.length;
console.log(sum);


/* 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив. */

let array = [100,250,50,168,120,345,188];
let newArray = [];
for (let i = 0; i < array.length; i++){
    newArray.push(array[i] * 5);
}
console.log(newArray);


/* 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив. */

let arr = ["okten", 21, false, 2022, 1];
let newArr = [];
for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === `number`){
        newArr.push(arr[i]);
    }
}
console.log(newArr);


/* - Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив */


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
            usersWithCities.push(user);
        }
    }
}
console.log(usersWithCities);



/* - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними. */

let arr = [4, 15, 18, 22, 33, 41, 99, 100, 103, 112];
for (let i = 0; i < arr.length; i++){
    if (arr [i] % 2 === 0){
        console.log(arr[i]);
    }
}


/* - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший. */

let arr = [4, 15, 18, 22, 33, 41, 99, 100, 103, 112];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
}
console.log(newArr);

/* - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. */

let arr = [ 'a', 'b', 'c'];
let  word = "";
for (let i = 0; i < arr.length; i++){
    word += arr[i];
}
console.log(word);


let arr = [ 'a', 'b', 'c'];
let  word = "";
let i = 0;
while (i < arr.length){
    word += arr[i];
    i++;
}
console.log(word);


let arr = [ 'a', 'b', 'c'];
let  word = "";
for (const string of arr){
    word += string;
}
console.log(word);
