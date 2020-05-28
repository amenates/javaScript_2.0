let int = '()()()((((()()))))())(';
let out = '';
// цикл
// длина строки
let count = 0;
for (let i = 0; i < int.length; i++) {
    if (int[i] == '(') count++; // увеличиваем на единицу
    if (int[i] == ')') count--; // уменьшает на единицу
    if (count < 0) break;
}

if (count != 0) out = `не правильно`;
else out = `правильно`;

document.querySelector('.out').textContent += out;

// усложнить задачу
// input принимает скобочки, и выводит правильно не правильно ввели
// запуск по кнопке
// выод на страницу

// let out1 = '';
//
// function f1 () {
//     let int1 = document.querySelector('.int-1').value;
//     let count1 = 0;
//
//     for (let i = 0; i < int1.length; i++) {
//         if (int1[i] == '(') count1++; // увеличиваем на единицу
//         if (int1[i] == ')') count1--; // уменьшает на единицу
//         if (count1 < 0) break;
//     }
//     if (count1 != 0) out1 = `не правильно`;
//     else out1 = `правильно`;
//     document.querySelector('.out-1').textContent += out1;
// }
//
// document.querySelector('.b-1').onclick = f1;
