let userName = prompt('Введите имя: ');
let userBirthday = +prompt('Введите год рождения: ');

let info = '${userName}: ${2026 - userBirthday}';
if(typeof userName === "number"){
    switch(2026 - userBirthday){
        case 1:
            alert(info + 'год');
            break;
        case 2, 3, 4:
            alert(info + 'года');
            break;
        case 4, 6, 7, 8, 9:
            alert(info + 'лет');
            break;
    }
}else{
    alert('Год должен быть числом!');
}

