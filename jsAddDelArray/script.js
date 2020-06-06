const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

// метод push
// позволяет добавить элементы в массив
console.log(a.length);
console.log(a.push(10, 11, 44, 55, 77));
console.log(a);

b.push('e', 'x');
console.log(b);

// метод pop
// позволяет удалить последний элемент в конце массива
console.log(b.pop()); // удаляет последний элемент в массиве, в данном примере "х"
console.log(b.pop());
console.log(b);

// метод delete
// позволяет удалить элемент внутри массива
// удалить элемент внутри массива
// 1- данный способ, не влияет на длину массива
// 2- в массиве, остаются "пустые пространства", пропуски индекса
delete a[3];
console.log(a);

// метод splice
// позволяет удалить и\или добавить новые элементы в массив и пересчитывать его индексы
// a.splice(3, 4); // начинает с 3 элемента, и удаляет 4 элемента
a.splice(3, 4, 'hi'); // начинает с 3 элемента, удаляет 4 элемента и добавляет 1 элемент "hi"
console.log(a);

// методы shift и unshift
// позволяют удалять и добавлять элементы в начало и конец массива