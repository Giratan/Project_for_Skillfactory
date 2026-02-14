let userName = prompt('Введите имя: ');
let userBirthday = +prompt('Введите год рождения: ');

if(typeof userName === "number"){
    alert('${userName}: ${2026 - userBirthday}');
}else{
    alert('Год должен быть числом!');
}

