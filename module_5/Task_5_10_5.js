const userOld = +prompt('Введите ваш возраст: ');

let indicator;

if(userOld < 18){indicator = 1};
if(userOld >= 18 && userOld <= 21){indicator = 2};
if(userOld > 21 && userOld <= 35){indicator = 3};
if(userOld > 35 && userOld <= 65){indicator = 4};



switch(indicator){
    case 1:
        alert('Вам еще рано работать');
        break;
    case 2:
        alert('Вам еще рано работать');
        break;
    case 3:
        alert('Вам еще рано работать');
        break;
    case 4:
        alert('Вам еще рано работать');
        break;
}
