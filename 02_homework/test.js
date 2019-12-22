// task 1 --------------------
let a = 7;
let b = 9;
console.log(a * b);

// task 2 --------------------
let c = 7;
let d = 9;
document.querySelector('.seg').innerHTML = c / d;

// task 3 --------------------
let e = 3;
let f = 5;
document.querySelector('.sum').innerHTML = e + f;

// task 4 --------------------
let e1 = '3';
let f1 = 5;
document.querySelector('.concat').innerHTML = e1 + f1; // произошла конкатенация.

// task 5 --------------------
let e2 = 3;
let f2 = 0;
document.querySelector('.seg2').innerHTML = e2 / f2;

// task 6 --------------------
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.concat3').innerHTML = e3 + f3;

// task 7 --------------------
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.mul').innerHTML = e4 * f4;

// task 8 --------------------
let int = document.querySelector('.int');
let but = document.querySelector('.but');

but.onclick = function f1() {
    console.log(int.value);
}

// task 9 --------------------
let int1 = document.querySelector('.int1');
let but1 = document.querySelector('.but1');
let out1 = document.querySelector('.out1');

but1.onclick = function f2() {
    out1.innerHTML = int1.value;
    int1.value = '';
}

// task 10 --------------------
let int2 = document.querySelector('.int2');
let but2 = document.querySelector('.but2');
let out2 = document.querySelector('.out2');

but2.onclick = function f3() {
    out2.innerHTML = int2.value * 10;
}

// task 11 --------------------
let int3 = document.querySelector('.int3');
let but3 = document.querySelector('.but3');
let out3 = document.querySelector('.out3');

but3.onclick = function f4() {
    out3.innerHTML = +int3.value + 10;
}
// task 12 --------------------
let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
let butGo = document.querySelector('.but-go');

butGo.onclick = function f5() {
    console.log('Hello' + ' ' + firstName.value + ' ' + lastName.value);
}

// task 13 --------------------
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let butSum = document.querySelector('.but-sum');
let outSum = document.querySelector('.out-sum');

butSum.onclick = function f6() {
    let n1 = +num1.value;
    let n2 = +num2.value;
    outSum.innerHTML = n1 + n2;
}

// task 14 --------------------
let numChange = document.querySelector('.num-change');
let butChange = document.querySelector('.but-change');

butChange.onclick = function f7() {
    numChange.value = 'Hello';
}

// task 15 --------------------
let y = document.querySelector('.style-border');
y.style.border = '2px solid red';

// task 16 --------------------
let typeNumber1 = document.querySelector('.type-num1');
let typeNumber2 = document.querySelector('.type-num2');
let butSumNumber = document.querySelector('.but-sum-number');
let outSumNumber = document.querySelector('.out-sum-number');

butSumNumber.onclick = function f8() {
    let typeNum1 = +typeNumber1.value;
    let typeNum2 = +typeNumber2.value;
    outSumNumber.innerHTML = typeNum1 + typeNum2;
}

// task 17 --------------------
let but4 = document.querySelector('.but4');

but4.onclick = function () {
    let t = document.querySelector('.int4');
    t = parseInt(t.value);
    console.log(t);
}

// task 18 --------------------
let butF = document.querySelector('.but-f1');

butF.onclick = function () {
    let m = document.querySelector('.f1');
    m = parseFloat(m.value);
    console.log(m);
}

// task 19 --------------------
let negativeNum1 = document.querySelector('.negative-num1');
let negativeNum2 = document.querySelector('.negative-num2');
let butNegativeSum = document.querySelector('.but-negative-sum');
let outNegativeSum = document.querySelector('.out-negative-num');

butNegativeSum.onclick = function f9() {
    let negN1 = parseInt(negativeNum1.value);
    let negN2 = parseInt(negativeNum2.value);
    outNegativeSum.innerHTML = negN1 + negN2;
}

// task 20 --------------------
let firstNameQuest = document.querySelector('.first-name-quest');
let lastNameQuest = document.querySelector('.last-name-quest');
let age = document.querySelector('.age');
let prof = document.querySelector('.prof');
let butStart = document.querySelector('.but-start');
let outQuest = document.querySelector('.out-quest');

butStart.onclick = function f10() {
    outQuest.innerHTML = 'Уважаемый' + ' ' + firstNameQuest.value + ' ' + lastNameQuest.value + ',' + ' ' + 'ваш возраст' + ' ' + ' ' + age.value + ' ' + 'года' + ',' + ' ' + 'по профессии вы' + ' ' + prof.value + '.';
}