let number = +prompt('Введите число от 1 до 4: ');
let result = '';

switch(number){
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна';
        break;
    case 3:
        result = 'Лето';
        break;
    case 4:
        result = 'Осень';
        break;
    default:
        result = 'В году 4 сезона.';

}
