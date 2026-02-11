const userOld = +prompt('Введите ваш возраст: ');

let indicator;

if(userOld <= 18){indicator = 1};
if(userOld > 18 && userOld <= 21){indicator = 2};
if(userOld > 21 && userOld <= 35){indicator = 3};
if(userOld > 35 && userOld <= 65){indicator = 4};

const number;

switch(indicator){
    case 1:
        alert('Вам не доступна данная услуа!');
        break;
    case 2:
        number = +prompt('Вам доступна сумма не более 50000 \nВведите сумму кратную 1000.');
        if(number <= 50000){
            alter(number % 1000 != 0 ? 'Значение е кратно 1000, доступная сумма: ${number - (number % 1000)}' : 'Добро пожаловать в команду');
        } else {
            alter('Вы превысили лимит доступной суммы');
        }
        break;
    case 3:
        number = +prompt('Вам доступна сумма не более 400000 \nВведите сумму кратную 1000');
        if(number <= 400000){
            alter(number % 1000 != 0 ? 'Значение е кратно 1000, доступная сумма: ${number - (number % 1000)}' : 'Добро пожаловать в команду');
        } else {
            alter('Вы превысили лимит доступной суммы');
        }
        break;
    case 4:
        number = +prompt('Вам доступна сумма не более 1000000. \nВведите сумму кратную 1000.');
		if(number <= 1000000){
            alter(number % 1000 != 0 ? 'Значение е кратно 1000, доступная сумма: ${number - (number % 1000)}' : 'Добро пожаловать в команду');
        } else {
            alter('Вы превысили лимит доступной суммы');
        }
		break;
}
