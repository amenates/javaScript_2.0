// Array

// let a = 'Иван';
// let b = '37';
// let z7 = 'Овен';
//
// // Массив - это способ представления данных в связанном виде
//
let c = ['Иван', 37, 'Овен']; // Это массив, видно что переменная С объединение какого то набора данных
// // 'Иван' - эта часть массива, называется значение массива
// // Что бы обратиться к значению массива, нужно использовать индекс
// // Индекс - это порядковый номер эллемента в массиве, начинается с 0
// // 'Иван' - индекс 0
// // '37' - индекс 1
// // 'Овен' - индекс 2
// let d = []; // Можно создать пустой массив. You can create an empty arrays
// console.log(c[0]); // в консоль выведится Иван, т.к. у него 0 индекс
// console.log(c[1]); // в консоль выведится 37, т.к. у него 1 индекс
// console.log(c[5]); // в консоль выведится undefined, т.к. эллемента с индексом 5 нет. Так можно проверять есть или нет эллемента в массиве
//
// // В массиве можно использовать любые типы данных
console.log(c); // выводит весь массив
document.querySelector('.out').innerHTML = c;
// console.log(c.length); // выводит длинну массива

// ------------------------------------------------------------------------------

// let zodiac = ['Козерог', 1, 1, 19];
// let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
//
// console.log(zodiac);
// console.log(man);
// console.log(`Длина массива: `);
// console.log(zodiac.length);
// console.log(man.length);
//
// console.log(man[4]);
// man[0] = 'Sergey'; // присваивание индексу новое значени, в нашем случае был Ivan, стал Sergey
// console.log(man);


// поменять местами значение массива

let a = [1, 2, 3, 4];
console.log(a);

// нужна временная переменная t
// let t = a[0]; // хранит 1
// // a[0] = a[3];
// // a[3] = t;
// // console.log(a);

// если не знаем какой конец массива, используем длину массива
let t = a[0]; // хранит 1
a[0] = a[a.length - 1];
a[a.length - 1] = t;
console.log(a);
console.log(a[888]);

// вывод массива на страницу
//document.querySelector('.out-1').textContent = a.length;
// for (let i = 0; i < a.length; i++) {
//     document.querySelector('.out-1').innerHTML += a[i] + ' ';
// }

// Выводим только четные числа в массиве
let out1 = '';
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        out1 += `${a[i]}_ _`;
    }
}
document.querySelector('.out-1').innerHTML = out1;

// ------------------------------------------------------------------------

let b = [4, 2, 5, 23, 56, 99, 3, 77, 3, 1, 0];

// Максимальное число в массиве
let max = b[0]; // 4
let out2 = '';

for (let i = 0; i < b.length; i++) {
    if (max < b[i]) {
        max = b[i];
        out2 = `Максимальное числов массиве: ${max}`;
    }
}

console.log(`max: ${max}`);
document.querySelector('.out-2').innerHTML = out2;

// Минимальное число в массиве
let min = b[0]; // 4
let out3 = '';

for (let i = 0; i < b.length; i++) {
    if (min > b[i]) {
        min = b[i];
        out3 = `Минимальное число в массиве: ${min}`;
    }
}

console.log(`min: ${min}`);
document.querySelector('.out-3').innerHTML = out3;

// Сумма чисел в массиве
let out4 = '';
let sum = 0;

for (let i = 0; i < b.length; i++) {
    sum = sum + b[i];
    out4 = sum;
}

console.log(`sum: ${sum}`);
document.querySelector('.out-4').innerHTML += out4;