const number = +prompt('Введите число: ');

const arr = [];

for(let i = 0; i <= number; i++) {
    arr.push(i);
}

for(let i of arr) {
    console.log(i);
}