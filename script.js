'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log('I can drive');

// const interface = 'Audio';
//const private = 543;

// function logger() {
//     console.log('My name is Jonas');
// }

// // calling/running/invoking a function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function addNumber(a, b) {
//     const c = a + b;
//     return c;
// }

// console.log(addNumber(2, 4));
// let sumNumber = (addNumber(2,8));
// console.log(sumNumber);

// // that was function declaration

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);
// function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// ARROW FUNCTION

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     //return retirement;

//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieck,mmes = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2 ,3));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years!`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }
  // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

//CODING CHALLENGE @@@@@@@@@@@@@@@@@@@@@@@@@@@@


// const calcAverage = (testData,testData1,testData2) => (testData + testData1 + testData2)/3;

// let avgDolphins = calcAverage(44,23,71);
// let avgKoalas = calcAverage(65,54,49);

// function checkWinner(avgDolphins,avgKoalas) {
//     if(avgDolphins/2 > avgKoalas) {
//         console.log(`Dophins wins! (${avgDolphins} vs ${avgKoalas})!`);
//     } else if (avgKoalas/2 > avgDolphins) {
//         console.log(`Koalas wins! (${avgKoalas}vs ${avgDolphins})!`);
//     } else {
//         console.log(`No one wins it!`);
//     }
// }

// checkWinner(avgDolphins,avgKoalas);

// checkWinner(576,111);

// // TEST 2

// avgDolphins = calcAverage(85,54,41);
// avgKoalas = calcAverage(23,34,27);

// checkWinner(avgDolphins,avgKoalas);


// //ARRAYS @@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael','Steven','Peter'];
// console.log(friends);

// //const y = new Array(1991,1984,2008,2020);
// //console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991,'teacher', friends];

// console.log(jonas);
// console.log(jonas.length);

// // EXERCISE

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const years = [1990,1967,2002,2010,2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Michael','Steven','Peter'];

// ADD ELEMENTS
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// REMOVE ELEMENTS

// friends.pop(); // remove last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();

// console.log(friends);
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')) {
//     console.log(`you have a friend called Steven`);
// } 

// let tip;
// let bill = 275;

// console.log(`bill is equal ${bill} $ so the tip is going to be ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20} $ so final price is equal ${tip + bill}`);

// bill = 40;

// console.log(`bill is equal ${bill} $ so the tip is going to be ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20} $ so final price is equal ${tip + bill}`);

// bill = 430;

// console.log(`bill is equal ${bill} $ so the tip is going to be ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20} $ so final price is equal ${tip + bill}`);

// function calcTip(billValue) {
//   let tip;
//   if (billValue >=50 && billValue <= 300) {
//     tip = billValue * 0.15;
//   } else {
//     tip = billValue * 0.20;
//   }
//   return tip;
// }

// console.log(calcTip(100));

// const bills = [125,555,4];

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2])
// ];

//   const total = [
  //     tips[0] + bills[0],
  //     tips[1] + bills[1],
  //     tips[2] + bills[2]
  //   ];
  
  //   console.log(total);
  

  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job:'teacher',
    friends:['Michael','Peter','Steven']
  }
  
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas['last' + nameKey]);  BAD

const interestedIn = prompt(`what do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);


if(jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
  } else {
    console.log(`Wrong request!  Choose between firstName, lastName, age, job and friends`)
  }

  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  console.log(jonas);

  //CHALLENGE
  // "Jonas has 3 friends, and his best friend is called Michael"

 console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}!`);