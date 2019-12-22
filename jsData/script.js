let inputIn = document.querySelector('.input-in'); // эллемент input (input-in)
let button = document.querySelector('button'); // кнопка button
let out = document.querySelector('.div1');

button.onclick = function () {
  // это выполнится, только когда кнопка будет нажата
  //console.log(inputIn.value); // говорим что хотим узнать у input его значение value и выводим это в консоль
  //value - это то, что введено в input
  let b = +inputIn.value; // + преобразует вводимое в число
  //console.log(b + 10);
  out.innerHTML = b;
  inputIn.value = ''; // очищает input
}