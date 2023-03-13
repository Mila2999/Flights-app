'use strict';
// booking flights
/*
1.creare function, pass parameters
2. create object by using literal sintax, and push them in to bookings array
3. create empty arry
4. pussing to array
5. call function with parameters
6.open new terminal, inspect
7.use short sircuting for setting defolt parameters ES6
8.call function with real parameters
9.we can use eny expression (199 * 1.2)in defolt parameters
10.we can use value of other parameters(199*numPassanjers)
11 look about order in parameters , js read one, next
12. we cant skeep parameters (1,3)
13.we skeep (1,undefinde,3)
*/
const bookings = [];

const createBooking = function (
  flightsNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //ES5
  //   numPassangers = numPassangers || 1;
  //   price = price || 199;

  const booking = { flightsNum, numPassangers, price };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 900);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

//129 How passing arguments works : value vs refferenses
const flight = 'EL124';
const milas = {
  name: 'Mila Savonik',
  passport: 223456789,
};
const checkIn = function (flightsNum, passanger) {
  flightsNum = 'EL199';
  passanger.name = 'Ms. ' + passanger.name;
  if (passanger.passport === 223456789) {
    //   alert('Checked in!');
    // } else {
    //   alert('Wrong passport number!');
  }
};
// checkIn(flight, milas);
// console.log(flight);
// console.log(milas);

// Is the same as doing
// const flightsNum = flight;
// const passanger = milas;

// real exemple
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(milas);
// console.log(milas);
checkIn(flight, milas);
//130 first classvs hogher-order functions
/*first class
1. store functions in variables or properties:
const add = (a, b) => a + b;
const counter = {
  value: 25,
  inc: function () {
    this.value++;
  },
};
2. Pass functions as argumennts to OTHER function
 const greet = () => console.log('Hey Mila');
 btnClose.addEventListener('click', greet);

3. Return function from function
4. Call metods of functions
counter.inc.bind(someOtherObject);*/

/*
Higher order functions
1. Functions that resive annother functions
 const greet = () => console.log('Hey Mila');
 btnClose.addEventListener('click', greet);
 addEventListener its Higher-Order Functions
 greet its Callback functions

 2. Functions that return new functions
 function count(){
  let counter = 0
  return function(){
    counter++
  }
 }
 cont() - h-o function
 return function() - returned function
 */
/*
//131 Functions that accepting callback functions
//generic func
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
// Generic function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order functoin (in string)
const transformer = function (str, fn) {
  console.log(`Original strig: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);
// JS uses callback all the time
const high5 = function () {
  console.log('👋🏿');
};
document.body.addEventListener('click', high5);
//higher5- call back function
//addEventListener - higher-order functions

//in  Array
['Mila', 'Andrey', 'Adam'].forEach(high5);

const myHigher = function () {
  console.log('How are you ?');
};
document.body.addEventListener('click', myHigher);

//132 function return function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
console.log(greeterHey);
greeterHey('Mila');
greeterHey('Andrey');
greet('Hello')('Mila');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Mila');
*/

//133 The call and apply metods and using this keyword
const lufthaunsa = {
  airline: 'Lufthaunsa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){},
  book(flightsNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iataCode}${flightsNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightsNum}`, name });
  },
};
lufthaunsa.book(239, 'Liudmyla Savonik');
lufthaunsa.book(345, 'Andrey Kistow');
console.log(lufthaunsa);
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthaunsa.book;
//Does NOT work
//book(23, 'Adam Grenfild');
book.call(eurowings, 23, 'Adam Greenfild');
console.log(eurowings);
book.call(lufthaunsa, 564, 'Rey Greenfild');
console.log(lufthaunsa);
