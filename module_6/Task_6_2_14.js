const leftToRight = 'Привет, мир!';
let rightToLeft = '';

for(let i = leftToRight.length - 1; i >= 0; i -= 1){
    rightToLeft += leftToRight[i];
}

console.log(rightToLeft);

