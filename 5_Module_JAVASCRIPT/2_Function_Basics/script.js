//Function:Calling functions

//VAT Calculation 1

const vatCal = function (basePrice, vatPrice){
   return basePrice * (vatPrice / 100);
};

const vatIncluded = function (basePrice, vatPrice) {
    const vatSum = (vatCal(basePrice, vatPrice));
    return basePrice + vatSum;
}

console.log (vatIncluded(2, 9)); //0.09 VAT total
console.log (vatIncluded(1000, 21)); //0.21 VAT total 

//VAT Calculation 1

// const vatIncluded = function (basePrice, vatPrice){
//     return basePrice / ((vatPrice + 100) / 100) ;
// };

// const vatExcluded = function (basePrice, vatPrice){
//     const vatSum = (vatIncluded(basePrice, vatPrice));
//     return vatSum;
// }

// console.log (vatExcluded(2.18, 9)); // Included VAT: 0.21
// console.log (vatExcluded(1210, 21)); // Included VAT: 0.21

//Hey Kiddo
// const ageNumber = function(agePerson){  
// if (agePerson >= 18) {
//     return true;
// } else {
//     return false;
// }
// };

// const greetAge = function(agePerson){
//     if (ageNumber(agePerson)) {
//         return 'Hello Adult';
//     } else {
//         return 'Hey Kiddo';
//     }
// };


// console.log(greetAge (5));
// console.log(greetAge (50));
 


//Function expression
// const squaredCal = function (number1, number2) {
//     const number1Squared = number1 * number1;
//     const number2Squared = number2 * number2;
//     const sum  = number1Squared + number2Squared;
//     const sumSquared = sum * sum;
//     return sumSquared;
// };

// console.log(squaredCal (2, 5))

//Function declaration
// function squaredCal (number1, number2){
//     const number1Squared = number1 * number1;
//     const number2Squared = number2 * number2;
//     const sum = number1Squared + number2Squared;
//     const sumSquared = sum * sum;
//     return sumSquared;

// }

// console.log(squaredCal (2, 5));

//Function Arrow 
// const squaredCal = (number1, number2) => {
//     const number1Sqaured = number1 * number1;
//     const number2Sqaured = number2 * number2;
//     const sum = number1Sqaured + number2Sqaured;
//     const sumSqaured = sum * sum;
//     return sumSqaured;

// }

// console.log(squaredCal (2, 5));



//Bouncer at a club

// const bouncerAnswer = function (
//     ageVisitor, 
//     maxVisitor, 
//     currentVisitor
//     ){
//     if (ageVisitor < 18) {
//         return 'This is a club for adults';
//     }
//     else if (currentVisitor >=  maxVisitor){
//        return  'Too busy now, come back later'; 
//     }
//     else {
//         return 'Come in!';
//     }
// };


// console.log(bouncerAnswer(10, 50, 40)); //club for adults
// console.log(bouncerAnswer(20, 50, 60)); //Too busy
// console.log(bouncerAnswer(20, 50, 40)); //Come in







// Function: Return statement
// const add = function(number1, number2){
//     const sum = number1 + number2;
//     if (sum > 100){
//         return "true";
//     }
//     return "false";
// };

// const result = add(114, 5);
// console.log(result);

//Function:Arguements
// const paintWall = function (paintColor, wallSide){
// console.log(wallSide + paintColor)
// };


// const paintRed = 'red';
// const paintOrange = 'orange';
// const paintGray = 'gray';
// const wallNorth ='The north wall has been painted ';
// const wallSouth ='The South-east wall has been painted ';

// paintWall(paintOrange, wallNorth);






// //Function: Basics
// const makePizza = function (){
//     console.log(makeDough);
//     console.log(dressPizza);
//     console.log(bakePizza);
// }

// const makeSushi = function(){
//     console.log(buyFish);
//     console.log(makeRice);
//     console.log(createRolls);
// }


// console.log(makePizza);
// console.log(makePizza);
// console.log(makeSushi);
// console.log(makeSushi);
// console.log(makeSushi);
