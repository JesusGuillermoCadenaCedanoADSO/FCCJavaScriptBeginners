//curso: Learn JavaScript - Full Course for Beginners
//https://www.youtube.com/watch?v=PkZNo7MFNFg

var number=5; // in-line comment
/* this is a multiline
comment */
/* Data types:
undefined, null, boolean, string, symbol, number and object
*/
var myName = "Jesus" //tiene alcance en todo el programa

let ourName = "freeCodeCamp" //tiene alcance limitado

const pi=3.14

var a; //variable sin inicializar
// las variables son sensibles a mayusculas y minusculas
var b=2;
console.log(a);
a=7;
b=a;
console.log(a);
var product = 2 *1.0;
console.log(product);
var remainder;
remainder=11%3;
console.log(remainder);
a+=12;
console.log(a);
a/=4;
console.log(a);
//caracter de escape
var myStr="I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
var myStr2='I am a "double qouted" string inside "double qoutes"';
console.log(myStr2);
var myStr3=`"hola" 'mundo'`;
console.log(myStr3);
/*****
 * code output
 * \' single qoute
 * \" double qoute
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 * /
 * ****/
var myStr4 = "firsline\n\t\\secondline\nthirdLIne"
console.log(myStr4)
var firstName="Ada";
var lastName="Madrina";
var firstNameLenght=firstName.length;
var lastNameLenght=lastName.length;
console.log(firstName,"largo:",firstNameLenght,
lastName,"largo:",lastNameLenght,"first letter of last name:",lastName[0]);
//las cadenas son inmutables
console.log("last letter of first name:",firstName[firstNameLenght-1]);

function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result="";
    result += "The "+ myAdjective +" "+ myNoun +" "+ myVerb 
    + " to the store " + myAdverb
    return result;
};

console.log(wordBlanks("dog","big","ran","quickly"));

//arrays

var ourArray =[["the universe",42],["everything",101010]];

var myData=ourArray[0];
var myData2=ourArray[1][0];

console.log(myData);
console.log(myData2);

//los arrays son mutables
var ourArray2=[18,64,99];
ourArray2[1]=45;
console.log("ourArray2: ",ourArray2);
ourArray2.push(15);
console.log("after push 15 on ourArray2:",ourArray2);
ourArray2.pop();
console.log("after remove the last element on ourArray2:",ourArray2);
ourArray2.shift();
console.log("after remove the first element on ourArray2:",ourArray2);
ourArray2.unshift(12);
console.log("after add element 12 to the first position on ourArray2:",ourArray2);

function ourReusableFunction(){
    console.log("Heyya, world");
}

ourReusableFunction();

function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
ourFunctionWithArgs(10,5);

//Alcance de variables:
var myGlobal=10;

function fun1(){
    // El resultado de fun2 es distinto al anteponer var a oopsGlobal
   var oopsGlobal=15;
}

function fun2(){
    var output="";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


function myLocalScope(){
    // myVar solo es visible en esta funcion
    var myVar=25;
    console.log(myVar);
}

myLocalScope();

// La siguiente linea genera error por que no es posible acceder a myVar
//console.log(myVar);

var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear ="sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr=[1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// the strict equality operator
/*
3 === 3;
3 === '3';
*/

console.log(`7=='7'`,7=='7');
console.log(`7==='7'`,7==='7');

// the strict inequality operator
/*
3 !== 3;
3 !== '3';
*/

console.log(`3!='3'`,3!='3');
console.log(`3!=='3'`,3!=='3');

//operador and : &&
//operador or : ||

function f1(valor){
    if (valor >=0 && valor<100){
        return 'valor mayor o igual que cero y menor a cien: ' + valor
    }else if(valor>=100 && valor <200){
        return 'valor mayor o igual que cien y menor a doscientos: ' + valor
    }else{
        return 'valor mayor o igual a doscientos: ' + valor
    }
}
console.log(f1(55));


// switch statement

function caseInSwitch(val){

    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
        answer="gamma";
        break;
        case 4:
            answer="delta";
            break;
        default:
        var answer="";
    }
    return answer;
}

console.log(caseInSwitch(7));

function sequentialSizes(val){
var answer="";
switch(val){
    case 1:
    case 2:
    case 3:
        answer="Low";
        break;
    case 4:
    case 5:
    case 6:
        answer="Mid";
        break;
    case 7:
    case 8:
    case 9:
        answer="High";
        break;
}
return answer;
}

console.log('sequentialSizes',sequentialSizes(8))

//counting cardsf

var count=0;

function cc(card){
switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;
}
var holdbet='Hold'
if (count>0){
    holdbet='Bet'
}
return count + " " + holdbet;
}

//cc(2);cc('K');cc(10);cc('K');cc('A');
console.log(cc(4))

//Objects
var ourDog ={
"name": "Camper",
"legs":4,
"tails":1,
"friends": ["everything!"],
"bark":"woof"
}

var legs=ourDog.legs;
var name=ourDog["name"]

console.log("name :",name,"legs :",legs);

ourDog.name="Happy Coder";
console.log("new name :",ourDog.name);

delete ourDog.bark;

var testObj={
12: "Namath",
16: "Montana",
19: "Unitas"
};

var playerNumber=16;
var player=testObj[playerNumber];
//objeto usado en funcion de busqueda
function phoneticLookup(val){
var result="";

var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
};
result = lookup[val];
return result;
}
//verificar si un objeto tiene determinada propiedad
console.log(phoneticLookup("charlie"));

var myObj ={
gift:"pony",
pet:"kitten",
bed:"sleigh"
}

function checkObj(checkProp){

if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
}else{
    return "Not Found"
}
}

console.log(checkObj("gift"));
//complex objects
var myMusic=[
{
    "artist":"Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats":[
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
},
{
    "artist":"Beau Carnes",
    "title": "Cereal Man",
    "release_year":2003,
    "formats":[
        "YouTube video"
    ]
}
]
//nested objects

var myStorage={
"car":{
    "inside":{
        "glove box":"maps",
        "passenger seat":"crumbs"
    },
    "outside":{
        "trunk":"jack"
    }
}
};

var gloveBoxContents=myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

//accesing nested arrays

var myPlants =[
{
    type:"flowers",
    list:[
        "rose",
        "tulip",
        "dandelion"
    ]
},
{
    type:"trees",
    list:[
        "fir",
        "pine",
        "birch"
    ]
}
];

var secondTree=myPlants[1].list[1];
console.log(secondTree)

//record collection

var collection ={
"2548":{
    "album":"Slippery When Wet",
    "artist":"Bon Jovi",
    "tracks":[
        "Let It Rock",
        "You Give Love a Bad Name"
    ]
},
"2468":{
    "album":"1999",
    "artist":"Prince",
    "tracks": [
        "1999",
        "Little Red Corvette"
    ]
}
}

var collectionCopy=JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
if (value===""){
    delete collection[id][prop];
}else if (prop === "tracks"){
    collection[id][prop]=collection[id][prop] || [];
    collection[id][prop].push(value);
}else {
    collection[id][prop]=value;

}

return collection;
}

updateRecords("2468","tracks","test");
console.log(updateRecords("2548","artist","ABBA"));


//loops

var myArray=[];
var i=0;
while(i<5){
myArray.push(i);
i++;
}
console.log(myArray);

var ourArray=[];

for (var i=0;i<5;i++){
ourArray.push(i);
}

console.log(ourArray);


var ourArray2=[];

for (var i=0;i<10;i+=2){
ourArray2.push(i);
}

console.log(ourArray2);

var myArray=[];

for (var i=9;i>0;i-=2){
myArray.push(i);
}

console.log(myArray);

var ourArr=[9,10,11,12];
var ourTotal=0;

for(var i=0;i<ourArr.length;i++){
ourTotal+=ourArr[i];
}

console.log(ourTotal);

//nesting for loops

function multiplyAll(arr){
var product =1;
for (var i=0;i<arr.length;i++){
    for (var j=0;j<arr[i].length;j++){
        product *= arr[i][j];
    }
}
return product;
}

var product=multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);

//do while loops

var myArray=[];
var i=10;

do{
myArray.push(i);
i++;
}while(i<5)

console.log(i,myArray);

//Profile Lookup

var contacts=[
{
"firstName":"Akira",
"lastName":"Laine",
"number":"0543236543",
"likes":["Pizza","Coding","Brownie Points"]
},
{
"firstName":"Harry",
"lastName":"Potter",
"number":"0994372684",
"likes":["Hogwarts","Magic","Hagrid"]
},
{
"firstName":"Sherlock",
"lastName":"Holmes",
"number":"0487345643",
"likes":["Intriguing Cases","Violin"]
}

]

function lookUpProfile(name,prop){
for (var i=0;i<contacts.length;i++){
    if(contacts[i].firstName===name){
        return contacts[i][prop] || "No such property";
    }
}
return "No such contact";
}

var data=lookUpProfile("Akira","likes");

console.log(data);

//Random fractions and whole numbers

var randomNumberBetween0and19=Math.floor(Math.random()*20);
console.log('randomNumberBetween0and19',randomNumberBetween0and19);

function randomWholeNum(){

return Math.floor(Math.random()*10);
}

console.log('randomNumberBetween0and10',randomWholeNum());


function ourRandomRange(ourMin,ourMax){
return Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;
}
var myRandom=ourRandomRange(1,9);
console.log('myRandom',myRandom);

//parseint

console.log("parseInt",parseInt("16"));



//multiple ternary operators
// condition ? statement-if-true: statement-if-false;

function checkSign(num){
return num>0 ? "positive": num<0? "negative":"zero"
}

console.log(checkSign(0));


//diferencia entre let y var
//usando la palabra clave let solo se puede declarar la variable una sola vez
let catName="Quincy";
let quote;

catName="Beau";

function catTalk(){
"use strict";
catName="Oliver";
quote=catName + " says Meow!";
return quote
}
console.log(catTalk());

//check scope of variable using let
//xx="";
function checkScope(){
"use strict";
let xx="function scope";
if (true){
    let xx="block scope";
    console.log("Block scope xx is: ",xx);
}
console.log("Function scope xx is: ",xx);
return xx;
}
checkScope();
//const Keyword
//A una variable que ha sido declarada con la palabra clave const
// no se le puede reasignar valor y es usual llamarla con letra mayuscula

function printManyTimes(str){
"use strict";
const SENTENCE=str + " is cool!";
//la siguiente linea genera error
//SENTENCE = str+ " is amazing!"

for(var i=0;i<str.length;i+=2){
    console.log(SENTENCE);
}
}
printManyTimes("freeCodeCamp");

//mutate an array declared with const

const s=[5,7,2];
function editInPlace(){
"use strict";
//la siguiente linea genera error
//s=[2,5,7];
s[0]=2;
s[1]=5;
s[2]=7;

}
editInPlace();
console.log(s);

//prevent object mutation

function freezeObj(){
"use strict";
const MATH_CONSTANTS={
    PI: 3.14
};
//freeze protege el valor de las variables
Object.freeze(MATH_CONSTANTS);

try {
    MATH_CONSTANTS.PI=99;
}catch( ex ){
    console.log(ex);
}
return MATH_CONSTANTS.PI;
}

const PI=freezeObj();

console.log(PI);


//Arrow functions

const magic =()=> new Date();

const myConcat=(arr1,arr2)=>arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));

//funciones anidadas

const realNumberArray=[4,5.6,-9.8,3.14,42,6,8.34,-2];

const squareList=(arr)=>{
const squaredIntegers=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);
return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//write higher order arrow functions

const increment = (function(){
return function increment(number,value=1){
    return number+value;
};
})();
console.log(increment(5,2));
console.log(increment(5));

//Use the Rest Operator with function parameters

const sum = (function(){
return function sum(...args){
    return args.reduce((a,b)=>a+b,0);
};
})();

console.log(sum(1,2,3,4));


//spread operator
const arr1=['jan','feb','mar','apr','may']
let arr2;
(function(){
arr2=[...arr1];
//arr2=arr1;
arr1[0]='potato';
})();
console.log(arr2);

//Destructuring assigment


const AVG_TEMPERATURES={
today:77.5,
tomorrow:79
};

function getTempOfTmrw(avgTemperatures){
"use strict";
const {tomorrow:tempOfTomorrow}=avgTemperatures;
return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));


//Destructuring nested objects

const LOCAL_FORECAST ={
today:{min:72,max:83},
tomorrow:{min:73.3,max:84.6}
};
function getMaxOfTmrw(forecast){
"use strict";
const {tomorrow: {max :maxOfTomorrow}} = forecast;
return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//destructuring assignment to assign variables from arrays

const [z,x, , y]=[1,2,3,4,5,6];
console.log(z,x,y);

let ax=8, bx=6;
(()=>{
"use strict";
[ax,bx]=[bx,ax]
})();
console.log(ax);
console.log(bx);

//destructuring assignment with rest operator

const source=[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
const [, , ...arr]=list;

return arr;
}
const arr=removeFirstTwo(source);
console.log(arr);
console.log(source);

//destructuring assignment to pass an object as a function's parameter.
//this is common for an API request
const stats={
max: 56.78,
standard_deviation:4.34,
median:34.54,
mode:23.87,
min:-0.75,
average:35.85
};
const half=(function(){
return function half({max, min}){
    return (max+min)/2.0;
};
})();
console.log(stats);
console.log(half(stats));


//template literals
const person={
name:"Zodiac Hasbro",
age:56
};

const greeting=`Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result={
success: ["max-length","no-amd","prefer-arrow-functions"],
failure: ["no-var","var-on-top","linebreak"],
skipped: ["id-blacklist","no-dup-keys"]
};
function makeList(arr){
const resultDisplayArray=[];
for (let i=0;i<arr.length;i++){
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
}
return resultDisplayArray;
}
const resultDisplayArray=makeList(result.failure);

console.log(resultDisplayArray)

//simple fields

const createPerson = (name, age, gender)=>({name, age, gender});
console.log(createPerson("Zodiac Hasbro",56,"male"));

//declarative functions

const bicycle={
gear: 2,
//setGear: function(newGear){
setGear(newGear){
    "use strict";
    this.gear=newGear;
}
};
bicycle.setGear(3);
console.log(bicycle.gear);

//class syntax to create function

function makeClass1(){
class Vegetable{
    constructor(name){
        this.name=name;
    }
}
return Vegetable;
}
const Vegetable=makeClass1();
const carrot=new Vegetable('carrot');
console.log(carrot.name);


//getters and setters

class Book{
constructor(author){
    this._author=author;
}
// getter
get writer(){
    return this._author;
}
// setter
set writer(updateAuthor){
    this._author=updateAuthor;
}
}

function makeClass2(){
class Thermostat{
    constructor(temp){
        this._temp=5/9*(temp-32);
    }
    get temperature(){
        return this._temp;
    }
    set temperature(updatedTemp){
        this._temp=updatedTemp;
    }
}
return Thermostat;
}

const Thermostat=makeClass2();
const thermos=new Thermostat(76);
let temp=thermos.temperature;
thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);

//import

import {capitalizeString} from "./module.js"
const cap=capitalizeString("hello!");
console.log(cap);

console.log("hello world");

//import all from js file

//import * as capitalizeString2 from "/string_function";

//import default

//import subtract from "string_functions"
//subtract (7-1);

import anyname, { xxx, yyy, square} from './module.js';
console.log(anyname()); //This is a default export.
console.log(xxx); //2

