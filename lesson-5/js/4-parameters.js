async function startProgram() {
	// We can make functions more versatile by including PARAMETERS. Parameters are like placeholders for data that the function requires to work properly. We provide the actual values (arguments) at the moment we invoke (call) the function.
	let currentHeading = getHeading();
	// STEP 7: Call or invoke the traceSquare FUNCTION and pass a distance parameter of 25 (cm).
	traceSquare(255, 50);
	// STEP 8: Run the program.
	
	// STEP 9: Add a velocity parameter to the above FUNCTION call (0-255).
	
	// STEP 12b: Have the robot speak the current heading using the variable created down below inside the traceSquare() function.
	
	//await speak(`My current heading is ${String(currentHeading)}.`, true);
	// STEP 12c: Notice how this does not work - the currentHeading variable is LOCAL in scope - it is only available within the code block comprising the traceSquare() function. This can be fixed by calling the getHeading() method here, instead - and capturing the returned value as a GLOBAL variable.
	
}

// STEP 1: Create a FUNCTION called traceSquare that accepts one parameter - distance (in cm) - and returns nothing.
async function traceSquare(velocity, distance) {
	// STEP 2: Roll the robot with the rollToDistance() method and incorporate the distance parameter.
	await rollToDistance(0, velocity, distance);
	// STEP 3: Turn the robot 90 degrees to the right and roll again using the distance parameter.
	await rollToDistance(90, velocity, distance);
	// STEP 4: Repeat the previous two steps to complete the square.
	await rollToDistance(180, velocity, distance);
	await rollToDistance(270, velocity, distance);
	// STEP 5: Write a text message on the screen using the distance parameter.
	await speak(`${distance} centimeter square, at heading ${currentHeading}!`);
	// STEP 10: Modify the traceSquare FUNCTION above so that it accepts a second parameter - velocity.
	
	// STEP 11: Change the above rollToDistance() METHODS so that they use the velocity parameter.
	
	// STEP 12a: Declare and initialize a variable to capture the current heading.
	

};