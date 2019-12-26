// Task 1
// Создайте button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.task-1').onclick = () => {
  alert('Task 1');
};

// Task 2
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.b-2').onclick = () => {
  alert('Task 2');
};

// Task 3
// Создайте p - при нажатии на него выводите alert с номером задачи.
document.querySelector('.b-3').onclick = () => {
  alert('Task 3');
};

// Task 4.
// Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.
document.querySelector('.b-4').onclick = () => {
  let checkBox = document.querySelector('.ch-1');
  console.log(checkBox.checked);
};

// Task 5.
// Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.
document.querySelector('.b-5').onclick = () => {
  console.log(document.querySelector('.ch-2').value);
  let checkBox2 = document.querySelector('.ch-2');
  console.log(checkBox2.checked);
}

// Task 6.
// Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.

// Task 7.
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов.

// Task 8.
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.

// Task 9.
// // Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.

// Task 10.
// Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.



