/* Exercise #2
Objective: Apply Hoisting Correctly in a JS Project.

Instructions:

Draft a JavaScript function where you call a function before its declaration.
Analyze the behavior and understand how hoisting impacts the outcome. */

hoistedFunction();

let someVar = function() {
	console.log("whatever"); 
   	};

someVar();

function hoistedFunction() {
	console.log("awesome");
}

// line 18: awesome
// line 12: whatever

// Declaring what you want to be reported first, then declaring it after the other function hoists it up to be output first.