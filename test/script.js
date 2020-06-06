// метод array.indexOf - выводит индекс массива, пример:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.indexOf("Mango");

console.log(a);


var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices);
// [0, 2, 4]