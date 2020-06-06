// Task 1
// Создайте массив ar1, заполните его любыми значениями. Выведите длину массива.
let ar1 = [1, 2, 6,  7, 'hello', 'world', true, false];

function f1() {
    document.querySelector('.out-1').innerHTML = ar1.length;
}

document.querySelector('.b-1').onclick = f1;

// Task 2
// Создайте массив ar2. Выведите нулевой, третий, восьмой элемент массива в out-2 через пробел.
let ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function f2() {
    document.querySelector('.out-2').innerHTML += `${ar2[0]} ${ar2[3]} ${ar2[8]}`;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
// Создайте массив ar3 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
let ar3 = [100, 200, 300, 400, 500, 600];

function f3() {
    document.querySelector('.out-3').innerHTML = ar3[0] + ar3[2] + ar3[3];
}

document.querySelector('.b-3').onclick = f3;

// Task 4
// Добавьте в массив ar4 значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел.

let ar4 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f4() {
    let out4 = '';

    ar4[7] = 'vietnam';
    ar4[6] = 'turkey';
    ar4[5] = 'italy';

    for (let i = 0; i < ar4.length; i++) {
        out4 += `${ar4[i]} `;
    }
    document.querySelector('.out-4').innerHTML = out4;
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// Добавьте в массив ar5 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-5. Разделитель - дефис. В .out-5-1 выведите длину массива ar5.

let ar5 = [];

function f5() {
    let out5 = '';
    let out51 = '';

    ar5[3] = 3.14;
    ar5[4] = 17;
    ar5[6] = 5;

    for (let i = 0; i < ar5.length; i++) {
        out5 += `${ar5[i]}-`;
        out51 = ar5.length;
    }
    document.querySelector('.out-5').innerHTML = out5;
    document.querySelector('.out-5-1').innerHTML = out51;
}


document.querySelector('.b-5').onclick = f5;

// Task 6
// Выведите массив ar6 в out-6 в формате индекс пробел значение пробел.

let ar6 = ['test', 'west', 'list', 'class', 'best'];

function f6() {
    let out6 = '';
    let index = 0;

    for (let i = 0; i < ar6.length; i++) {
        out6 += `${index} ${ar6[i]} `;
        index++;
    }
    document.querySelector('.out-6').innerHTML = out6;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Используя цикл выведите на страницу массив ar7 в обратном порядке. Разделитель - пробел.

let ar7 = [1, 2, 3, 'hello', 66];

function f7() {
    let out7 = '';

    for (let i = (ar7.length - 1); i > 0; i--) {
        out7 += `${ar7[i]} `;
    }
    document.querySelector('.out-7').innerHTML = out7;
}

document.querySelector('.b-7').onclick = f7;