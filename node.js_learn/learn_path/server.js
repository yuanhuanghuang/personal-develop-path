const math = require('./math') //since math.js is not a common core module, we have to use ./
console.log(math.add(2,3));

const {add, subtract} = require('./math')
console.log(add(3,4));
console.log(subtract(4,5));