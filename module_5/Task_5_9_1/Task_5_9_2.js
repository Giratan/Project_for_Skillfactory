let number = +prompt('Введите число: ');

if((number % 2 == 0) ?? (number != null)){
    alert('Вы ввели четное число ${number}');
}
else{
    alert('Вы ввели нечетное число ${number}');
}
