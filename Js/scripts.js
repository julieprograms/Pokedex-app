alert('Hello World');

//this is for testing only:
let myName = 'Bob';
document.write(myName);
/* myName = 'John Doe';
document.write(myName);

 this is a longer comment
with line breaks so
you don't forget to comment the
heck out of this! */

//test some math stuff here
/* let simpleAddition = 324 + 23455;
document.write(simpleAddition);

let size = 3205;
let doubleSize = size * 53;
document.write(doubleSize);

trying out some code examples here:
let name = 'John';
let welcomeMessage1 = "Hello, I'm";
let welcomeMessage2 = 'and I say to you: "Hello!"';
console.log(welcomeMessage1 + ' ' + name + ' ' + welcomeMessage2);

console.log(`${welcomeMessage1} ${name} ${welcomeMessage2}`);

let name = 'John';
let age = 32;
let message = `Hello!
This is a longer message here.
My name is: ${name},
and I'm ${age}.`;

let integer = 10;
let negativeInteger = -7;
let float = 10.15;

let boolean1 = true;
let boolean2 = false;
let notABoolean = 'true'; // This is the string 'true'—it’s not a boolean!

let car = {
  color: 'red',
  mileage: 10
};

let annesAge = 27;
let anne = {
  name: 'Anne',
  age: annesAge,
  child: {
    name: 'Joe',
    age: 2
  }
};

one liner objects can be written like this:
let shortObject = { name: 'Bob' };
let emptyObject = {};

console.log(anne.name);
console.log(anne.name);

anne.age = 28;
console.log(anne.age);

delete anne.age;
anne.age will be undefined as if it'd never been shortObject

set new properties to already defined objects like this:
let user = {};
user.email = 'test@test.com';
user.age = '27';

access through square brackets like this:
let currentUserName = 'sam';

let userAges = {
  anne: 27,
  sam: 112,
  megan: 97,
};

userAges[currentUserName] = 113;
console.log(userAges[currentUserName]);

document.querySelector('button').addEventListener('click', () => {
  // when the user click on the button, the following code is executed


  // this instructs the browser to take the value of the input field and store it in `currentUserName` variable
  let currentUserName = document.querySelector('#username').value;

  // NOTICE HERE: `currentUserName` contains the object key name, and is being inserted after "Entered username:" text within "Results View" section
  document.querySelector('#username_key').innerText = currentUserName;
  // NOTICE HERE: `userAges[currentUserName]` contains the age, and is being inserted after "User's Age:" text within "Results View" section
  document.querySelector('#age').innerText = userAges[currentUserName];

});

arrays:
// array of strings
let foodArray = ['pizza', 'tuna', 'apple'];

// array of objects
let carArray = [
  { type: 'Bus', wheels: 4, color: 'blue'},
  { type: 'Sport', wheels: 4, color: 'red'}
];

// array of arrays
let myCalculatorNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let mixedArray = [
  1,
  'two',
  [1, 2, 3],
  { age: 5 }
];

let numberArray = [1, 2, 3];
let mixedArray = [
  1,
  'two',
  numberArray,
  { age: 5 }
];

console.log(numberArray[0]); // Outputs 1
console.log(mixedArray[2][1]); // Accessing the nested array, Outputs 2

mixedArray[1] = 2;

let numberArray = [1, 2, 3];
let mixedArray = [
  1,
  'two',
  numberArray,
  { age: 5 }
];

mixedArray[1] = 2;
console.log(mixedArray[1]); // Outputs 2

let a = 1;
// The following line implies: copy the current value of `a`, then assign it to `b`
let b = a;
console.log(a); // 1
console.log(b); // 1

a = 2;
console.log(a); // 2
console.log(b); // still 1 since this is what was copied earlier

let car1 = {
  model: 2019,
  color: "red"
};

// The next code line implies: tell “car2” to refer to what “car1” is referring to
let car2 = car1;

console.log(car1); // {model: 2019, color: "red"};
console.log(car2); // {model: 2019, color: "red"};

// Change the “model” property of the object referred to by “car1”
car1.model = 2018;

console.log(car1); // {model: 2018, color: "red"}
console.log(car2); // {model: 2018, color: "red"} -> Notice that “model” is now also 2018, even though the change was done by way of “car1”
console.log(car1[0].model);

let myVariable = 'Hello world!';
console.log(typeof myVariable);

let myVariable = 'Hello world!';
console.log(typeof myVariable);
myVariable = 10;
console.log(typeof myVariable);
*/

let size = 100;
let doubleSize = size * 2;
let minSize = (doubleSize * 2) - (size / 2);
document.write(minSize);

let favouriteFood = 'Chocolate';
document.write(favouriteFood);
