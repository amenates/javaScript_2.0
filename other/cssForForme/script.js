// function f1() {
//     alert('hello my old friend');
// }

// document.querySelector('.b-1').onclick = f1;

document.querySelector('.b-1').onclick = () => {
    alert('hello my old friend');
}