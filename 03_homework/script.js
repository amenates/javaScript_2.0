// task 1 --------------------
let i1 = document.querySelector('.i-1');
let b1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');

b1.onclick = function f1() {
  if (i1.value == 4) {
    out1.innerHTML = 'true';
  }
  else {
    out1.innerHTML = 'false';
  }
}

// task 2 --------------------
let a21 = 35;
let a22 = 10;
let b2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

b2.onclick = function f2() {
  if (a21 > a22) {
    out2.innerHTML = a21;
  }
  else {
    out2.innerHTML = a22;
  }
}

// task 3 --------------------
let int1 = document.querySelector('.i-31');
let int2 = document.querySelector('.i-32');
let b3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');

b3.onclick = function f3() {
  let i31 = +int1.value;
  let i32 = +int2.value;

  if (i31 > i32) {
    out3.innerHTML = i31;
  }
  else {
    out3.innerHTML = i32;
  }
}

// task 4 --------------------
let i4 = document.querySelector('.i-4');
let b4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

b4.onclick = function f4() {
  let youYear = i4.value;
  let year = 2019 - youYear;

  if (year >= 18) {
    out4.innerHTML = 1;
  }
  else {
    out4.innerHTML = 0;
  }
}

// task 5 --------------------
let i5 = document.querySelector('.i-5');
let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');

b5.onclick = function f5() {
  let num5 = +i5.value;

  if (num5 < 0) {
    out5.innerHTML = 'm';
  }
  else if (num5 == 0) {
    out5.innerHTML = 0;
  }
  else {
    out5.innerHTML = 1;
  }
}

// task 6 --------------------
let i6 = document.querySelector('.i-6');
let b6 = document.querySelector('.b-6');
let out6 = document.querySelector('.out-6');

b6.onclick = function f6() {
  let num6 = +i6.value;
  let a = num6 % 2;

  if (a == 0) {
    out6.innerHTML = 'even';
    }
  else {
    out6.innerHTML = 'odd';
  }
}

// task 7 --------------------
let i71 = document.querySelector('.i-71');
let i72 = document.querySelector('.i-72');
let b7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');

b7.onclick = function f7() {
  let num71 = +i71.value;
  let num72 = +i72.value;

  out7.innerHTML = Math.pow(num71, num72);
}

// task 8 --------------------
let s8 = document.querySelector('.s-8');
let b8 = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');

b8.onclick = function f8() {
  switch (+s8.value) {
    case 1:
      out8.innerHTML = 'One';
      break;
    case 2:
      out8.innerHTML = 'Two';
      break;
    case 3:
      out8.innerHTML = 'Three';
      break;
  }
}

// task 9 --------------------
let i9 = document.querySelector('.i-9');
let b9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');

b9.onclick = function f9() {
  let num9 = +i9.value;

  if (num9 >= 1 && num9 <= 32 ){
    out9.innerHTML = '1';
  }
  else if (num9 >= 33 && num9 <= 43) {
    out9.innerHTML = '2';
  }
  else if (num9 >= 44 && num9 <= 64){
    out9.innerHTML = '3';
  }
  else {
    out9.innerHTML = '0';
  }
}

// task 10 --------------------
let i101 = document.querySelector('.i-101');
let i102 = document.querySelector('.i-102');
let s103 = document.querySelector('.s-103');
let b10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

b10.onclick = function f10() {
  let num101 = +i101.value;
  let num102 = +i102.value;
    
    switch (s103.value) {
        case '-':
            out10.innerHTML = num101 - num102;
            break;
        case '+':
            out10.innerHTML = num101 + num102;
            break;
        case '*':
            out10.innerHTML = num101 * num102;
            break;
        case '/':
            out10.innerHTML = num101 / num102;
            break;
    }
}

// task 11 --------------------