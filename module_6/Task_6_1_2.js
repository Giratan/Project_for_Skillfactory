const x = 5;

switch(typeof x){
    case "number":
        alert('number');
        break;
    case "":
        alert('string');
        break;
    case "boolean":
        alert('boolean');
        break;
    case "undefined":
        alert('undefined');
        break;
    case "object":
        alert('object');
        break;
    case "symbol":
        alert('symbol');
        break;
    case "function":
        alert('function');
        break;
}