// // метод arrays.indexOf - выводит индекс массива, пример:
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.indexOf("Mango");
//
// console.log(a);
//
// // ---------------------------------------------------------
//
// let array = ['a', 'b', 'a', 'c', 'a', 'd'];
// let element = 'a';
// let idx = array.indexOf(element);
//
// console.log(idx);
//
// // ---------------------------------------------------------
//
// let int1 = +document.querySelector('.i-1').value;
// let out1 = document.querySelector('.out-1');
//
// document.querySelector('.b-1').onclick = () => {
//     console.log(int1);
//
// }

document.querySelector('.b-2').onclick = () => {
    let arr = [1, 2, 2, 4, 5, 4];
    let out2 = '';
    let temp = arr[0];
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (temp != arr[i]) {

            out2 += arr[i];
        }
        else {
            temp = arr[i]
            //delete arr[i];
        }
    }
    document.querySelector('.out-2').innerHTML = out2
}