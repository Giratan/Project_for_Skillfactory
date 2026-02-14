const keyNames = ['first', 'second', 'third'];

const obj = {
        first: 1,
        second: 2,
        third: 3,
    }

const keyValues = [];

for(let i of keyNames){
    keyValues.push(obj[i]);
}