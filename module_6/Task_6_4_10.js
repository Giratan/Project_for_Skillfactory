
const obj = {
    first: 'First',
    second: 'Second'
}

const keys = Object.keys(obj);
const values = Object.values(obj);

let result = '';

for (let i = 0; i < keys.length; i++){
    result += `${keys[i]}: ${values[i]}\n`;
}

console.log(result);