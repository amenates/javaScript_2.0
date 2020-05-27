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