// let out = document.querySelector('.out');
//
// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++){
//         out.textContent += '*';
//     }
//     out.textContent += ' ';
// }
// 1. Отрабатывает внешний цикл 1 раз
// 2. Запустился внутренний - прошел 10 раз, нарисовал 10 звездочек
// 3. Сработал внешний, поставил пробел. Опять начал рисовать 10 звездочек, и так пять раз.
// ИТОГО: 5 раз нарисовалось 10 звездочек и пять проблелов

let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++){
//         out.textContent += k;
//     }
//     out.textContent += ' ';
// }

for (let i = 1; i <= 9; i++) {
    //out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
    // интерполяция строк:
    //out.innerHTML += `3*${i}=${3 * i}<br>`;
    for (let k = 1; k < 10; k++) {
        out.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out.innerHTML += '<hr>';
}