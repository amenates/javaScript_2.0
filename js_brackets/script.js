let int = ['()(('];

console.log(typeof int); // узнаем тип переменной
console.log(int.length); // узнаем длинну строки

for (let i = int.length; i >= '('; i++) {
    console.log('ура');
}