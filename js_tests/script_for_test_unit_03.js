// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let s8 = document.querySelector('.s-8');
let out8 = document.querySelector('.out-8');

function f8(){
    switch (+s8.value) {
        case 1:
            out8.textContent = 'One';
            console.log(s8.value);
            break;
        case 2:
            out8.textContent = 'Two';
            console.log(s8.value);
            break;
        case 3:
            out8.textContent = 'Three';
            console.log(s8.value);
            break;
    }
}

document.querySelector('.b-8').onclick = f8;