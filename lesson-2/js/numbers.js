/* STEP 1: Number types (integer, float, and double)
declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
let myInt = 5;
let myFloat = 6.3456;
let myDouble = 7.83487348763847;
let myBinary = 0B01001010001010101;
let myHex = 0X04F6E2;
let myBitwise = -~-~-~0;

// Note - there are also different number systems: binary, octal, and hexadecimal

/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
let step2a = 5 ** 2;
// let step2a = Math.pow(5, 2);
console.log(step2a);
// Try declaring and initializing a couple of variables as numbers
let num1 = 90;
let num2 = 30;
let step2b = num1 * num2 / 8 + 2 - 0.5;
console.log(`Value of step2b is ${step2b}.`);
/* OR… num1 * num2 / 8 + 2 - 0.5; */

/* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
let step2c = (num1 + num2) * 5 - 25;
console.log(`Value of step2c is ${step2c}.`);

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
let step3 = 5;
// step3 ++ or step3 -- in the console is different than:
// ++ step3 or -- step3  

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
let step4 = 5;
step4 %= 2; // OR step4 = step4 % 2
console.log(step4);

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
let step5a = 5;
let step5b = "4";

let step5c = step5a >= step5b;
console.log(step5c);

