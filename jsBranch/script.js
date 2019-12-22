// let a = 6;
//
// if (a > 9) {
//   // выполниться, если выражение в скопках будет правдой
//  console.log('YES');
// }
// else {
//   console.log('NO');
// }

const age = document.querySelector('.age');
const button = document.querySelector('.but');

button.onclick = () => {
  // () => this is стрелочная функция
  let num = +age.value;
  if (num >= 16 && num < 60) {
    // && - И
    //
    console.log('Welcome!');
  }
  else if (num >= 60) {
    console.log('Что ты тут делаешь?!');
  }
  else {
    console.log('Ты не пройдешь!');
  }
}