// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('.i-1').value);
// }

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('.i-1').value);
//     // присваиваем стили
//     document.querySelector('button').style.backgroundColor = document.querySelector('.i-1').value; // кнопке присвоили стиль, выбранный в импут-колор
// }

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('.i-1').value);
//     // присваиваем стили
//     document.querySelector('button').style.backgroundColor = document.querySelector('.i-1').value;
// }
//
// document.querySelector('.i-1').oninput = () => {
//     console.log(document.querySelector('.i-1').value);
//     document.querySelector('span').textContent = document.querySelector('.i-1').value;
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    }
    else {
        console.log('Не нажат');
    }
}


document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault(); // позволяет остановить перезагрузку формы
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);
}