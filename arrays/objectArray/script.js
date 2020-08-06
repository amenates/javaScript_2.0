const a = {
    "a": 5,      // a == ключ или индекс, 5 == значение
    "b": 'hello',
    "z2": 'hi',
    y43: 1999,
    'test name': 2222,
};
a.yyyy = 555; // добавление элемента в массив
a.z2 = 2; // изменение элемента в массиве
delete a.a; // удаление элемента в массиве a, будет удален ключ а со значением 5

console.log(a);
console.log(a.a); // обращение к несуществующему элементу возвращает undefined
console.log(a.z2); // обращение к массиву, к ключу (индексу) z2, получаем HI

let k = 'y43';
console.log(a[k]);

// вывод массива:
// document.querySelector('.out-1').innerHTML = a;

let out = '';
for (let key in a) {
    out += key + ': ' + a[key] + '<br>';
}
document.querySelector('.out-1').innerHTML = out;