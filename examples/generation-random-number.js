//Пример: Случайное число от 0 (включительно) до 1:
function getRandom() {
    return Math.random();
}
document.querySelector('.b-1').onclick = function () {
    document.querySelector('.out-1').textContent = getRandom();
}

//Пример: Случайное число между min и max
function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
}
document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = getRandomArbitary(3, 12);
}


// Пример: Случайное целое между min и max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector('.b-3').onclick = function () {
    document.querySelector('.out-3').textContent = getRandomInt(1, 7);
}
