// ФУНКЦИИ
// Функция - это возможность использовать код повторно.
// В других языках программирования может называться процедурой.

let f1 = document.querySelector('.f-1'); // получаем кнопку с классом f-1.

function one() {
    console.log('work');
}

// Способы вызова функции:
// Первый способ:
//one();
// Второй способ, по нажатию на кнопку:
//document.querySelector('.f-1').onclick = one;
f1.onclick = one; // говорим, что на кнопку f1 нужно нажать.

// Что значит возвращать значения?
console.log(1 + one()); // будет NaN, так как функция ничего не возвразает, и является undefined
console.log(one()); // undefined

function two() {
    console.log('work222');
    return 54; // Это метка функции прекратить свою работу, и если функция выполняется в каком то выражении, вместо функции подставить 54 (в данном примере)
}
two();
console.log(1 + two());

let a = 8;
let b = 9;

function multi() {
    //console.log(a * b);
    a * b;
    return a * b;
}
// Результат функции можно присваивать переменным, и дальше с ними работать
let c1 = multi(); // присваиваем переменной результат функции two()
let c2 = 10 * multi(); // присваиваем переменной результат функции two()
console.log(c1, c2);
// В функцию можно передавать параметры в круглых скобках

// x, y - параметры функции. При вызове функции, мы обязаны их указать
// в js6 можно указать параметры по умолчанию, если при вызове функции мы укажем другие они перезапишутся, если нет, будут использоваться по умолчанию.
function multi2(x = 2, y = 2) {
    return x * y;
    // все что написано ниже return выполняться не будет
}
console.log(multi2());
console.log(multi2(3, 2));
console.log(multi2(5, 5));
console.log(multi2(2, a));
// можно передать один параметр:
console.log(multi2(5));

// выше были именнованые функции, они имеют имена

// Анонимные функции:
// Используется там, где функция вызывается только один раз
let f12 = document.querySelector('.f-12');

f12.onclick = function () {
    console.log('work!');
}

// Стрелочные функции:
// Один из способов писать анонимные функции

let f13 = document.querySelector('.f-13');

f13.onclick = () => {
    console.log('arrow function is worked!');
}

// ---------------------------------------------------------------------
// It is training:
document.querySelector('.f-2').onclick = function () {
    console.log('anonymous function works!');
    document.querySelector('.d-2').textContent += 'anonymous function works!';
}

document.querySelector('.f-3').onclick = () => {
    console.log('arrow function works!');
    document.querySelector('.d-3').textContent += 'arrow function works!';
}

(d, h) => {

}