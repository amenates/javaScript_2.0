// Set в JS
let a = new Set();
a.add(1);
a.add(2);
a.add('hello');
a.add(1); // при добавлении элемента в set, происходит строгая проверка. Если такой элемент есть - он не добавляется внутрь набора.
a.add('1');
//a.clear(); // очищает все элементы в наборе
//a.delete('hello'); // удаляет элемент из set

console.log(a);
console.log(a[0]); // NO
console.log(a.length); // NO
console.log(a.size); // позволяет увидеть кол-во элементов положенных в set
// Проверяем наличие элементов в наборе
console.log(a.has(2)); // проверяет есть ли элемент в наборе. Тут true
console.log(a.has('2')); // Тут false, т.к. нет элемента

// вывод набора set
for (let item of a) {
    console.log(item);
}

// выводим только уникальные элементы массива
let arr = [1, 2, 3, 5, 4, 6, 'hello', true, 'world'];

let b = new Set(arr);
console.log(b);
console.log(b.size);

// преобразовываем set в массив
let c = Array.from(b);
console.log(c[2]);