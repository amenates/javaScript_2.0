// функция - это способ использовать код повторно
let f1 = document.querySelector('.f-1') // кнопка с классом f-1

function one() {
    console.log('work');
}

one();
f1.onclick = one;

//document.querySelector('.f-1').onclick = one;

// возврат значения:
function two() {
    console.log('work2222');
    return 54; //
}

two();
console.log(1 + two());

// if (two() == 54) {
//     console.log('true');
// }
// else {
//     console.log('false');
// }

let a = 8;
let b = 9;

function multi() {
    console.log(a * b);
    return a * b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);


// this is beautiful function
function multi2(x = 2, y = 5) {
    // (x, y) - параметры функции, ими можно манипулировать внутри функции. При вызове функции, обязаны их указать
    // (x = 2, y = 5) - параметры функции по умолчанию
    return x * y;
    // все что ниже будет проигнорировано
}

//multi2(2, 2);
console.log(multi2(2, 2)); // (2, 2) - указываем параметры функции
console.log(multi2(a, 2));
console.log(multi2());
console.log(multi2(10));

// АНОНИМНЫЕ ФУНКЦИИ
// принято вызывать если функция используется один раз
document.querySelector('.f-2').onclick = function () {
    console.log('hello');
}

// СТРЕЛОЧНАЯ ФУНКЦИЯ
// принято вызывать если функция используется один раз
document.querySelector('.f-3').onclick = () => {
    console.log('hello world');
}

// ---------------------------------------------------------------------
