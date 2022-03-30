'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log('I can drive');

// const interface = 'Audio';
//const private = 543;

function logger() {
    console.log('My name is Jonas');
}

// calling/running/invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function addNumber(a, b) {
    const c = a + b;
    return c;
}

console.log(addNumber(2, 4));
let sumNumber = (addNumber(2,8));
console.log(sumNumber);

// that was function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);