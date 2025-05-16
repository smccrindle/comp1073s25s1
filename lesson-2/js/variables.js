/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;
const myH1 = document.querySelector("h1");

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Scott";
myAge = 53;

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Iain";
myAge = 54;

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;
// Strings (use '' or "")
let manufacturer = `Honda`;
// Booleans
let isCarCool = true;
// Arrays
let myCarArray = ["Honda", "Nissan", "Toyota"];
let myMixedArray = ["Scott", false, 54];
// Objects
	
let myDog = {
		name: "Rufus",
		breed: "Retriever",
		size: "large",
		age: 6,
		goodDog: true
};
// STEP 5: Typing (JavaScript is a loosely-typed language)
// myCarArray.forEach((element) => console.log(element));
// Object.keys(myDog).forEach((element) => console.log(element));
for (const [key, value] of Object.entries(myDog)) {
		console.log(`${key}: ${value}`);
};
