let word = prompt('Введите слово/предложение: ');

if(word.split('').join('') == word.split('').reverse().join('')){
    alert('Слово ${word} является палиндромом');
}
else{
    alert('Слово ${word} не является палиндромом');  
}