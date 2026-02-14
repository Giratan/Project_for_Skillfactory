let firstNumber = +prompt('Введите первое число: ');
let secondNumber = +prompt('Введите второе число: ');

if(Math.abs(10 - firstNumber) < Math.abs(10 - secondNumber)){
    alert('Ближе к 10 первое число');
}
else{
    alert('Ближе к 10 второе число');
}