let number = 123;

let sum = number % 10;
number /= 10;

sum += number % 10;
number /= 10;

sum += number % 10;

console.log(sum);