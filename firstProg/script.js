console.log('Hello' + ' ' + 'World!'); // конкатенация строк (слипка строк)
console.info('Hello!');

// alert('Hello!');

// вывод на страницу
// позволяет "схватить" параграф div с id out и начать с ним работать + можно заменить содержимое div
document.getElementById('out').innerHTML = '1111';
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = '<b>2020</b>';

// второй вариант получить эллемент
//document.querySelector('h2').innerHTML = 5; // "схватит" первый попавшийся заголовок h2 на странице
//document.querySelector('h2.header').innerHTML = 5; // "схватит" первый попавшийся заголовок h2 на странице
document.querySelector('.header').innerHTML = 15; // "схватит" первый попавшийся заголовок h2 на странице
document.querySelector('#one').innerHTML = 777;
// .header - класс
// #one - айдишник

let a = document.querySelector('#two'); //внутрь а - получили параграф с id two
a.innerHTML = '!!!получилось!!!';

