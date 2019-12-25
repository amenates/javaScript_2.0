// Task 1
// Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль.

let a = 4;

if (a == 4) {
  console.log('Переменная а = 4');
}

// Task 2
// Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.

let b = 8;
let c = 10;

if (b > c) {
  console.log('Переменная b больше');
}
else {
  console.log('Переменная c больше');
}

// Task 3
// Используя else if добавьте в предыдущую задачу проверку на равенство.

let b1 = 8;
let c1 = 10;

if (b1 == c1) {
  console.log('Переменные равны');
}
else {
  console.log('Переменные не равны');
}

// Task 4. Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны".

let i41 = document.querySelector('.i-41');
let i42 = document.querySelector('.i-42');
let out4 = document.querySelector('.out-4');

function f4() {
  let n41 = +i41.value;
  let n42 = +i42.value;

  if (n41 > n42) {
    out4.textContent = n41;
  }
  else if (n41 < n42) {
    out4.textContent = n42;
  }
  else {
    out4.textContent = 'Равны';
  }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения больше или равен 2000 - выводит в консоль возраст пользователя.

let i5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');

function f5() {
  let year = +i5.value;
  let youAge = 2019 - year;

  if (year >= 2000) {
    console.log(youAge);
  }
  else {
    out5.textContent = 'Ваш возраст: ' + youAge;
  }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует.

let i6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');

function f6() {
  if (+i6.value >=1 && +i6.value <= 32) {
    out6.textContent = 'Квартира существует';
  }
  else {
    out6.textContent = 'Квартира не существует';
  }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число.

let i7 = document.querySelector('.i-7');
let out7 = document.querySelector('.out-7');

function f7() {
  if (i7.value > 0) {
    out7.textContent = 'Число больше 0';
  }
  else if (i7.value == 0) {
    out7.textContent = 'Число равно 0';
  }
  else {
    out7.textContent = 'Число меньше 0';
  }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % . И проверить. Если остаток от деления 0 - то число четное, если нет - не четное.

let i8 = document.querySelector('.i-8');
let out8 = document.querySelector('.out-8');

function f8() {
  let number = +i8.value % 2;
  if (number == 0) {
    out8.textContent = 'Четное';
  }
  else {
    out8.textContent = 'Не четное';
  }

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите в степень из второго input. Результат выведите на страницу.

let i91 = document.querySelector('.i-91'); // число
let i92 = document.querySelector('.i-92'); // степень
let out9 = document.querySelector('.out-9');

function f9() {
  let n91 = +i91.value;
  let n92 = +i92.value;

  out9.textContent = n91 ** n92;
}

document.querySelector('.b-9').onclick = f9;

// Task 10
//Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello...

let i10 = document.querySelector('.i-10');

function f10() {
  if (i10.value == '') {
    alert('Ошибка! Введите имя.');
  }
  else if (i10.value == ' ') {
    alert('Ошибка! Введите имя.');
  }
  else {
    alert('Hello' + ' ' + i10.value + '!');
  }
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, если нет - сообщение с содержимым input.

let i11 = document.querySelector('.i-11');

function f11() {
  let name = i11.value;
  name = name.trim();

  if (name == '') {
    alert('Ошибка! Введите имя.');
  }
  else {
    alert('Hello' + ' ' + name);
  }
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. Для решения используйте switch.

let i12 = document.querySelector('.i-12');

function f12() {
  switch (+i12.value) {
    case 1:
      console.log('Один');
      break;
    case 2:
      console.log('Два');
      break;
    case 3:
      console.log('Три');
      break;
  }
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома.

let i13 = document.querySelector('.i-13');
let out13 = document.querySelector('.out-13');

function f13() {
  let house = i13.value;

  if (house >= 1 && house <=5) {
    out13.textContent = 'Улица 1';
  }
  else if (house >= 6 && house < 11) {
    out13.textContent = 'Улица 2';
  }
  else if (house >=11 && house <=20) {
    out13.textContent = 'Улица 3';
  }
}

document.querySelector('.b-13').onclick = f13;

// Task 14
// Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. Больше 600 - смертность 100%. Вывод результатов сделайте на страницу.

let i14 = document.querySelector('.i-14');
let out14 = document.querySelector('.out-14');

function f14() {
  x1 = +i14.value;

  if (x1 >= 0 && x1 <= 25) {
    out14.textContent = 'Не обнаруживается';
  }
  else if (x1 >= 26 && x1 <= 50) {
    out14.textContent = 'Снижение числа лимфоцитов';
  }
  else if (x1 >= 51 && x1 <= 100) {
    out14.textContent = 'Вялость, рвота';
  }
  else if (x1 >= 101 && x1 <= 150) {
    out14.textContent = 'Смертность 5%';
  }
  else if (x1 >= 151 && x1 <= 350) {
    out14.textContent = 'Смертность 50% за 30 суток';
  }
  else if (x1 >= 351 && x1 <= 600) {
    out14.textContent = 'Смертность 90% за 2 суток';
  }
  else {
    out14.textContent = 'Смертность 100%';
  }
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.

let x = 1;
let y = 0;

console.log(x && y);
console.log(x || y);

// Task 16
// В Казахстане, налог на объем двигателя составляет:
// от 0 до 499 кубов - 2525 тенге
// от 500 до 1199 кубов - 5050 тенге
// от 1200 до 1599 кубов - 8275 тенге
// от 1600 до 1899 кубов - 9675 тенге
// от 1900 до 1999 кубов - 11075 тенге

// от 2000 и выше кубов - 15000 тенге
// Напишите программу, где пользователь может ввести в input объем двигателя и получить налог на данный двигатель.

let i16 = document.querySelector('.i-16');
let out16 = document.querySelector('.out-16');

function f16() {
  let d = +i16.value;

  if (d >= 0 && d <= 499) {
    out16.textContent = 'Налог составляет 2525 тенге';
  }
  else if (d >= 500 && d <= 1199) {
    out16.textContent = 'Налог составляет 5050 тенге';
  }
  else if (d >= 1200 && d <= 1599) {
    out16.textContent = 'Налог составляет 8275 тенге';
  }
  else if (d >= 1600 && d <= 1899) {
    out16.textContent = 'Налог составляет 9675 тенге';
  }
  else if (d >= 1900 && d <= 1999) {
    out16.textContent = 'Налог составляет 11075 тенге';
  }
  else {
    out16.textContent = 'Налог составляет 15000 тенге';
  }
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.
let i171 = document.querySelector('.i-171');
let i172 = document.querySelector('.i-172');
let out17 = document.querySelector('.out-17');

function f17() {
  let money18 = +i171.value;
  let cup = i172.value;

  if (cup == 'rub') {
    out17.textContent = `В рублях это: ${money18 * 62.2499.toFixed()} RUB`;
  }
  else if (cup == 'euro') {
    out17.textContent = `В евро это: ${money18 * 0.9022.toFixed()} EURO`;
  }
  else  if (cup == 'uah') {
    out17.textContent = `В гривнах это: ${money18 * 23.26.toFixed()} UAH`;
  }
}

document.querySelector('.b-17').onclick = f17;

// Task 18
// Проделайте предыдущую задачу с помощью switch case.
let i181 = document.querySelector('.i-181');
let i182 = document.querySelector('.i-182');
let out18 = document.querySelector('.out-18');

function f18() {
  let money = +i181.value;

  switch (i182.value) {
    case 'rub':
      out18.textContent = `В рублях это: ${money * 62.2499.toFixed()} RUB`;
      break;
    case 'euro':
      out18.textContent = `В евро это: ${money * 0.9022.toFixed()} EURO`;
      break;
    case 'uah':
      out18.textContent = `В гривнах это: ${money * 23.26.toFixed()} UAH`;
      break;
  }
}

document.querySelector('.b-18').onclick = f18;

// Task 19
// Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.

let i191 = document.querySelector('.i-191');
let i192 = document.querySelector('.i-192');
let i193 = document.querySelector('.i-193');
let out19 = document.querySelector('.out-19');

function f19() {
  let n191 = +i191.value;
  let n192 = +i192.value;
  let oper = i193.value;

  if (oper == '+') {
    out19.textContent = n191 + n192;
  }
  else if (oper == '-') {
    out19.textContent = n191 - n192;
  }
  else if (oper == '*') {
    out19.textContent = n191 * n192;
  }
  else if (oper == '/') {
    out19.textContent = n191 / n192;
  }
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Проделайте предыдущую задачу с помощью switch case.
let i201 = document.querySelector('.i-201');
let i202 = document.querySelector('.i-202');
let i203 = document.querySelector('.i-203');
let out20 = document.querySelector('.out-20');

function f20() {
  let n201 = +i201.value;
  let n202 = +i202.value;

  switch (i203.value) {
    case '+':
      out20.textContent = n201 + n202;
      break;
    case '-':
      out20.textContent = n201 - n202;
      break;
    case '*':
      out20.textContent = n201 * n202;
      break;
    case '/':
      out20.textContent = n201 / n202;
      break;
  }
}

document.querySelector('.b-20').onclick = f20;