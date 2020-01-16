// Task 1
// Создайте button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.task-1').onclick = () => {
  alert('Task 1');
}

// Task 2
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.b-2').onclick = () => {
  alert('Task 2');
}

// Task 3
// Создайте p - при нажатии на него выводите alert с номером задачи.
document.querySelector('.b-3').onclick = () => {
  alert('Task 3');
}

// Task 4
// Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.
document.querySelector('.b-4').onclick = () => {
  let checkBox = document.querySelector('.ch-1');
  console.log(checkBox.checked);
}

// Task 5
// Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.
document.querySelector('.b-5').onclick = () => {
  let checkBox2 = document.querySelector('.ch-2').checked;

  if (checkBox2 == true) {
    console.log(document.querySelector('.ch-2').value);
  }
  else {
    console.log(checkBox2);
  }
}

// Task 6
// Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.
document.querySelector('.b-6').onclick = () => {
  alert(document.querySelector('.hid-6').value);
}

// Task 7
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов.
document.querySelector('.b-7').onclick = () => {
  let pas7 = document.querySelector('.pas-7').value;

  if (pas7.length >= 6) {
    alert(pas7);
  }
  else{
    console.log('Ошибка! Длинна пароля меньше 6 символов.');
  }
}

// Task 8
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.
document.querySelector('.b-8').onclick = () => {
  document.querySelector('.d-8').innerHTML = '<input type="text" class="i-81"><button class="b-81">Go</button>';
  document.querySelector('.b-81').onclick = () => {
    alert(document.querySelector('.i-81').value);
  }
}

// Task 9
// Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.
document.querySelector('.b-9').onclick = () => {
  let r9 = document.querySelector('.i-9').checked;

  if (r9 == true) {
    alert(document.querySelector('.i-9').value);
  }
  else {
    alert(r9);
  }
}

// Task 10
// Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.
document.querySelector('.b-10').onclick = () => {
  document.querySelector('.d-10').style.backgroundColor = document.querySelector('.i-10').value;
}

// Task 11
// Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.
document.querySelector('.b-11').onclick = () => {
  document.querySelector('.i-112').style.backgroundColor = document.querySelector('.i-111').value;
}

// Task 12
// Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.
document.querySelector('.b-12').onclick = () => {
  let data = document.querySelector('.i-12').value;
  document.querySelector('.out-12').innerHTML += data;
}

// Task 13
// Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. Добавьте событие oninput на range и тоже выводите значение на страницу.
document.querySelector('.b-13').onclick = () => {
  document.querySelector('span').innerHTML = document.querySelector('.i-13').value;
}

document.querySelector('.i-13').oninput = () => {
  document.querySelector('.out-13').innerHTML = document.querySelector('.i-13').value;
}

// Task 14
// Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.
document.querySelector('.b-14').onclick = () => {
  document.querySelector('.out-14').innerHTML = document.querySelector('#text-14').value;
}

// Task 15
// Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.
document.querySelector('.b-15').onclick = () => {
  let i15 = document.querySelector('.i-15').value;
  let text15 = document.querySelector('#text-15');
  let out15 = document.querySelector('.out-15');

  text15.innerHTML = i15;
  out15.innerHTML = i15;
}

// Task 16
// Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.

document.querySelector('.b-16').onclick = () => {
  let s16 = document.querySelector('#s-16').value;
  let out16 = document.querySelector('.out-16');

  out16.innerHTML = s16;
}

// Task 17
// Эту задачу пока не делаем!!!!!

// Task 18
// Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.

let s18 = document.querySelector('#s-18');
let out18 = document.querySelector('.out-18');

s18.onchange = () => {
  out18.innerHTML = s18.value;
}


// Task 19
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!

document.querySelector('.b-19').onclick = () => {
  let login1 = document.querySelector('.login-1').value;
  let pass1 = document.querySelector('.pass-1').value;

  console.log(login1);
  console.log(pass1);
}

// Task 20
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать).

document.querySelector('.b-20').onclick = (event) => {
  event.preventDefault();
  let form = document.querySelector('form');
  console.log(form.elements.login2.value);
  console.log(form.elements.pass2.value);
}





