// for
// while
// do while

// // (условия при которых цикл либо выполняется, либо не выполняется)
// for (старт, начало; работаем пока верно; счетчик) {
// // в {} блок команд которые будут выполняться пока условие верно
//
// }

// FOR

// for (let i = 0; i < 5; i++) {
// // i++ this is i = i + 1
//   // i >= 0 this is бесконечный цикл
//   if (i == 4) break; // когда i = 4 цикл прервется
//   console.log(i);
// }
//
// for (let i = 0; i < 5; i++) {
//   console.log('******');
// }

// let div = document.querySelectorAll('.one');
// // console.log(div);
// // //div.style.background = 'red';
// //
// // for (let i = 0; i < div.length; i++) {
// //   console.log(div[i]);
// //   div[i].style.background = 'red';
// //   div[i].onclick = two;
// // }
// //
// // function two() {
// //   console.log('work!');
// // }
// //
// // let b = document.getElementsByClassName('one');
// // console.log(b);
// //
// // for (let i = 0; i < b.length; i++) {
// //   b[i].style.border = '1px solid black';
// // }

document.querySelector('button').onclick = () => {
  let r = document.querySelectorAll('input[type="radio"]');
  console.log(r);
  for (let i = 0; i < r.length; i++){
    if (r[i].checked) {
      console.log(r[i].value);
    }
  }
}

let out = '';
for (let i = 0; i < 10; i++) {
  //document.querySelector('#out').innerHTML += i + ' ';
  //if (i == 6) continue;
  out += '***** <br>';
  // if (i == 6) break;
}
document.querySelector('#out').innerHTML = out;
