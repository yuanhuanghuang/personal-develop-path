/*
console.log('this');
console.log(typeof "Yuan");
//string definition
const myVariable = "Yuan";
//length property of string output-> 4
console.log(myVariable.length)
//charAt
console.log("01234".charAt(2));
//indexOf / lastIndexOf / slice / toUpperCase / includes->return boolean / split
console.log("indexOf: "+"012345234".indexOf("234"));
console.log("lastIndexOf: " + "012345234".lastIndexOf("234"));
console.log("0123".slice(2,4));//does not include the ending position
console.log("abc".toUpperCase())


//Number

const myString = "42";
//convert string to number
console.log(Number(myString) + 3);
//number in the console window is purple and string is white
let myFloat = 42.0;
let myInt = 42;
//compare with ===
console.log(myFloat === myInt);
//isInteger()
console.log(Number.isInteger(23));
//parseInt / parseFloat / toString() / toFixed() ->return a string type
const myString2 = "42.0123";
console.log(Number.parseFloat(myString2).toFixed(3));
console.log(Number.parseInt(myString2));
console.log(myString.toString());

//Math
//static property PI
// methods: trunc / round /ceil / floor
console.log(Math.PI); 
console.log(Math.trunc(Math.PI));//truncate any decimals to an integer
console.log(Math.round(3.4));
console.log(Math.round(3.5));// round to the nearest integer
console.log(Math.ceil(3.4)); // always go up
console.log(Math.ceil(3.5));
console.log(Math.floor(3.4)); // always go down 
console.log(Math.floor(3.5));

//pow, min, max
console.log(Math.pow(4,2));
console.log(Math.min(1,2,3));
console.log(Math.max(1,2,3));
console.log(Math.random()); //rand(0,1), includes 0 not 1

//rand from 1 to 10
console.log(Math.floor(Math.random() * 10 + 1)); // not using ceil because less prob to get 0

// if statement / switch 
switch("2"){
    case 1:
        break;
    case 2:
        break;
    default:
        console.log("No matches");
}
*/

//const { send } = require("process");


//ternary operator
//an if else like statement
//condition ? ifTrue ; ifFalse;
let soup = "soup";
let response = soup ? "soup" : "no soup today";
console.log(response);

let testScore = 68;
let grade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore >69 ? "C" 
: "D"
console.log(`The grade of ${testScore} is ${grade}`)

//User input
/*
//get an alert box pop up
alert("alert");
let confirmmResult = confirm("Ok === True \n cancel  === false")
console.log(confirmmResult);
let name  = prompt("Please enter your name");
// console.log(name ?? "You didn't enter your name"); // click cancel and it wil show the string
// but if we put nothing and click ok it will return a blank, so we use length property to check the return value

if (name){
    console.log(name,name.length)
    console.log(name.trim(),name.trim().length) //trim the white spaces, can only trim those white spaces in the end
    console.log(name ?? "You didn't enter your name");
}else{
    console.log('You didn\'t put in your name');
}
*/

/*

//Functions
function sum(a,b){
    return a+b
}

//keywords: var let const
// var x = 1; //old code and got abandoned almostly

//var doesn;t throw an error if you redefine the value
let x = 1; 
x = 2;// allow reassignment but not redeclaring
console.log(x)

//but const sill not allow reassignment




//Arrays
const myArray = [];

//add diff types of elements to array
myArray[0] = 1;
myArray[1] = true;
myArray[2] = "diffTypes";
//push add to the last, unshift add to the first, pop remove elements
newLength = myArray.push("push"); //return the new length
console.log(myArray);
//spice method: replace or delete value

//Objects
const obj = {name: "Yuan", action: function(){
    return "a function"
}
}; //curly braces 
console.log(obj.name);
console.log(obj.action());

//use the generic object as a constructor to create another object
const vehicle = {
    wheels: 4,
    engine: function (){
        return "V"
    }
}
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); // not showing wheels property
console.log(truck.wheels); //Inheritance
console.log(Object.keys(truck));
console.log(Object.values(truck));
//loop
for(let key in vehicle){
    console.log(key);
}
//if want to delete key
delete vehicle.wheels;
console.log(vehicle);
//destructuring object
vehicle.brushes = 2
// in this case, we are defining num varibale
const {brushes: num} = vehicle;
delete vehicle.engine;
vehicle.glasses = 5
console.log(num)
const {brushes,glasses} = vehicle; //use the original key names to destructuring the object

//Js classes
//ways of change class property: 1)use dot directly 2) use getter and setter 3)create getCrust and setCrust methods
class Pizza{
    constructor(pizzaType){
        this.type = pizzaType;
        this.size = "medium";
        this.crust = "original";
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    bake(){
        console.log(`a ${this.type} ${this.size} ${this.crust} pizza`);
    }
}
const myPizza = new Pizza("thin");
// we can change the property through dot, but this is not desired
myPizza.size = "huge";
myPizza.pizzaCrust = "sausage";
//so we use getter and setter


myPizza.bake();

//JSON

//JSON is used to send and receive data
//a text format data
// not just used in JS

const myObj = {
    name:"Yuan",
    hello:function(){
        console.log("hello");
    }
};
const sendJSON = JSON.stringify( myObj);
console.log(sendJSON) //does not contain the hello function, because JSON does not send functions
console.log(typeof sendJSON); //string

const receiveJSON = JSON.parse(sendJSON); //receive data from server and parse, and reveiveJSON is obj again.

a = true + true;
console.log('true+true =',a);

//error listener

//Reference error: common error
//Syntax error: cannot catch and fix
//Type error

//write a function that generates error

const makeError = () => { //name the function with arrow, input parameter in the parenthesis
    try{
        throw new customError("this is a custom error");// if throw happens here, the rest of the try box will not be executed. and goes into the catch box

    }catch(err){
        console.log(err);
        //console.warn(err);
        //we can send the error to the console and also the error stack
        console.log(err.stack);

    }
    finally{
        console.log('finally');
    }
}
makeError();
function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message}`;
}

*/

//Document Object Model (DOM)

const view1 = document.getElementById("view1");
console.log(view1); //select an element by id and show in the console

const view2 = document.querySelector("#view2"); // hashtag indicates that view2 is an ID
console.log(view2);

view1.style.display =  "none";
view1.style.display =  "flex";
view2.style.display = "flex";
//we can hide or dispaly pages

//we can also select class by using getElemetnByClass and querySelectorAll(".views")

//select all divs section in views
const div = document.querySelectorAll('div');
console.log(div); 
const sameDiv = view1.getElementsByTagName('div')
console.log(sameDiv);





