// Цикл While, Do while

// While

for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {
    // в цикл входит с нуля
    console.log('k: ' + k); // сначало выводит
    k++; // потом увеличивается
}
// тело цикла будет работать, пока в скобочках true

let i = 0;
while (i < 5) {
    i++; // сначала увеличивается
    console.log('i: ' + i); // потом выводит
    // выводится с 1
}
// тело цикла будет работать, пока в скобочках true

// ---------------------------------------------------------------------------------
// бесконечный цикл:
// let q = 0;
// while (q < 5) {
//     console.log(`q: ${q}`);
//     if (q == 3) continue; // когда q станет роавно 3, continue пропустит следующую итерацию, т.е. q++. Таким образом q всегда будет равно 3.
//     q++;
//     // continue - позволяет пропустить последующие итерации в цикле и начать слудующую.
// }
//-----------------------------------------------------------------------------------

// сумма цифр от 0 до 10
let sum = 0;
let p = 0;

while (p <= 10) {
    sum = sum + p;
    p++;
}
console.log(`sum = ${sum}`);

// ****
// ****
// ****
let astra = 0;
let outAstra = '';
let flag = 3;

while (astra < 3) {
    let astra1 = 0;
    // цикл рисует одну ГОРИЗОНТАЛЬ, строка
    while (astra1 < 4 ){
        if (astra1 < flag) {
            //outAstra += '&nbsp'; // неразрывный пробел
            outAstra += '0';
        }
        else {
            outAstra += '*';
        }
        astra1++;
    }
    flag--;
    astra++;
    outAstra += '<br>';
}
document.querySelector('.out-astra').innerHTML = outAstra;