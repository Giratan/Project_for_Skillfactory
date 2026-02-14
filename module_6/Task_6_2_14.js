const leftToRight = 'Привет, мир!';
let rightToLeft = '';

for(let i = leftToRight.length - 1; i >= 0; i--){
    rightToLeft += leftToRight[i];
}

console.log(rightToLeft);

