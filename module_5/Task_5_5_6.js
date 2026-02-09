let startSecond = 13444;

const second = Math.floor(startSecond % 3600 % 60);
const minute = Math.floor(startSecond % 3600 / 60);
const hours = Math.floor(startSecond / 3600);

console.log('Точное время: ${hours}:${minute}:${second}');