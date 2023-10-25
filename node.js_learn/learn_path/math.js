const add = (a,b) => a + b; //create some functions
const subtract= (a,b) => a - b;
const multiply = (a,b) => a * b;
const devide = (a,b) => a / b;

module.exports = {add, subtract, multiply, devide} //export all the functions we defined

/*
another way of the above method:

exports.add = (a,b) => a+ b;
// directly add the function to exports
*/