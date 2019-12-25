document.querySelector('button').onclick = () => {
    console.log(document.querySelector('.i-1').value);
}

//let p2 = document.querySelector('p-2').value;

document.querySelector('.b-2').onclick = () => {
    // можно присвоить стили:
    document.querySelector('.b-2').style.backgroundColor = document.querySelector('.b-2').value;
}