// метод arrays.indexOf - выводит индекс массива, пример:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.indexOf("Mango");

console.log(a);

// ---------------------------------------------------------

let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = array.indexOf(element);

console.log(idx);

// ---------------------------------------------------------

let int1 = +document.querySelector('.i-1').value;
let out1 = document.querySelector('.out-1');

document.querySelector('.b-1').onclick = () => {
    console.log(int1);

}