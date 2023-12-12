"use strict";

// const cutPieces = function (fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges){

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3));


// const calcAverage = (score1, score2, score3) => {
//     let sum = ((score1 + score2 + score3)/3);
//     console.log(sum);
//     return sum;
// };


// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);


// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins < avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     };
// };



// checkWinner(scoreDolphins, scoreKoalas);

// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins2, scoreKoalas2);

// calcAverage(20, 20, 20);
// console.log(calcAverage(10, 10, 10));
// console.log(calcAverage);

 
// let bill = 301;
// let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

// console.log(bill);
// console.log(tip);
// console.log(`Tip is $${tip}, so pay $${bill + tip}`);

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * .15;
//         console.log(`Bill is $${bill} and Tip is $${tip}, so pay $${bill + tip}`);
//         return tip;
//     } else {
//         const tip = bill * .20;
//         console.log(`Bill is $${bill} and Tip is $${tip}, so pay $${bill + tip}`);
//         return tip;
//     };
// };

// // calcTip(100);

// const bills = [125, 555, 44];

// const tips = [];

// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
// };

// for (let i = 0; i < tips.length; i++) {
//     totals.push(bills[i] + tips[i]);
// };

// console.log(tips);
// console.log(totals);

// const mark = {
//     fullName: "markMiller",
//     mass: 78,
//     height: 1.69,

//     calcBMI(mass, height) {
//         this.BMI = mass/(height*height);
//         console.log(mark);
//     } 
// };

// const john = {
//     fullName: "johnSmith",
//     mass: 92,
//     height: 1.95,
// };
// console.log(mark);
// mark.calcBMI(78, 1.69);

