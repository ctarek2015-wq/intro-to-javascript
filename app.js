console.log('Hello, World!');
let name = 'Ahmed Tarek';
console.log(name);
const nameTwo = 'Ahmed Tarek 2';
console.log(nameTwo);
let age;
console.log(age);
let myString = 'Hello World';
let myOtherString = "Hello World again";
console.log(typeof myString);
console.log(typeof 12.34);
let cohort;
console.log(cohort);
console.log(typeof null);
let username = 'Ahmed Tarek';
let greeting = `Hello, ${username}!`;
console.log(greeting);
let longString = `Hello, ${username} and welcome to the application!
Get started by logging in below!
We're happy to have you. ${greeting}`;
console.log("1"===1);
console.log(false || null || true || 0 || "" || NaN);
console.log(true && "false" && "5");

const val = '3';

if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}

const value = 'banana';

if (value === 'green') {
    console.log('go');
} else if (value === 'yellow') {
    console.log('slow');
} else if (value === 'red') {
    console.log('stop');
} else {
    console.log('go up');
}

const salary = 500;
const ticketPrice = 50;
const currency = 'BHD';

if (salary >= ticketPrice) {
    console.log( `Round trip ticket = ${ticketPrice * 2} ${currency}.
You can afford ${salary / ticketPrice / 2} round trip tickets.`);
} else {
    console.log("Bro, You're broke.")
}

if (salary >= ticketPrice && salary <= 750) {
    console.log( 'you can go home' )
} 