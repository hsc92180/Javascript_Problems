// Q1.) Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let obj = {};

obj.name = "John";
console.log(obj);

obj.surname = "Smith";
console.log(obj);

obj.name = "Pete";
console.log(obj);

delete obj.name;
console.log(obj);
