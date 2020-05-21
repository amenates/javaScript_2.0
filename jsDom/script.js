const one = document.querySelector('.one');
// присваиваем сво-во, можно присваивать любые свойства
one.style.width = '150px';
one.style.paddingBottom = '40px';

//console.log(one.style);

// присваиваем классс:
one.classList.add('two', 'three'); // можно присвоить два класса

// удаляем класс:
one.classList.remove('three');


// присваиваем кнопке класс:
const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
}

// атрибуты data
console.log(one.getAttribute('data')); // читаем атрибут
console.log(document.querySelector('link').getAttribute('href')); // читаем атрибут

one.setAttribute('data-num', 6); // создаем атрибут

// задача на подсчет стоимости бензина за галлон:

let gas = document.querySelectorAll('.gas');

for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = +document.querySelector('.gallons').value;
        let amount = this.getAttribute('data'); // this - это кнопка по которой нажали
        console.log(gallons * amount);
    }
}

let a = document.createElement('div'); // создаем эллемент
a.textContent = 'Hello!';
a.classList.add('div-1');
a.onclick = function () {
    alert('hello!');
}

document.querySelector('.test').appendChild(a); // вывели эллемент а, на страницу
console.log(a);

let b = document.createElement('button'); // create button
b.classList.add('b-1'); // присваиваем кнопке класс
b.textContent = 'hello';

b.onclick = function () {
    this.classList.toggle('three');
}

// добавляем кнопку в параграф, уже созданный в html
document.querySelector('.test-2').appendChild(b);



