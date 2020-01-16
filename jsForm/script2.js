// // стрелочная функция == анонимная (без имени) функция
// document.querySelector("button").onclick = () => {
//   console.log(document.querySelector("#one").value);
//
//   // style
//   document.querySelector("button").style.backgroundColor = document.querySelector("#one").value;
// }
//
// document.querySelector("#one").oninput = () => {
//   console.log(document.querySelector("#one").value);
//   document.querySelector('span').innerHTML = document.querySelector("#one").value;
// }

document.querySelector("#b-1").onclick = () => {
  console.log(document.querySelector('#i2').value);
  let i2 = document.querySelector('#i2');

  if (i2.checked) {
    console.log('Нажат');
  }
  else {
    console.log('Отжат');
  }
}

document.querySelector('#b-2').onclick = (event) => {
  event.preventDefault(); // останавливаем перезагрузку формы
  // let textArea = document.querySelector('#two');
  // console.log(textArea.value);
  // textArea.value = 'Проверка записи!';
  let form = document.querySelector('form');
  console.log(form);
  console.log(form.elements.n1.value);
  console.log(form.elements.n2.value);
}

// // this is my Test =)
// document.querySelector('.b1').onclick = () => {
//
//   let pass = document.querySelector('.pass-1').value;
//   console.log(pass);
//   let t1 = document.querySelector('#t1');
//   t1.innerHTML = pass;
//
//   // очищаем textarea
//   document.querySelector('.b2').onclick = () => {
//     t1.innerHTML = '';
//   }
// }