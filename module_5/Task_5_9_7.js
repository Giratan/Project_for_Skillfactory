let firstNumber = +prompt('Введите первое число: ');
let secondNumber = +prompt('Введите второе число: ');

let result = Math.abs(10 - firstNumber) < Math.abs(10 - secondNumber) ? 'Ближе к 10 первое число ${firstNumber}' : 'Ближе к 10 второе число ${secondNumber}';