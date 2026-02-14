const numbers = [];
const filteredNumbers = [];

for (let i = 1; i<= 100; i += 1){
    numbers.push(i);
}

for(let i of numbers){
    if(number % 5 === 0) {
        filteredNumbers.push(i);
    }
}

console.log(filteredNumbers);