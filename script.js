'use strict';

//123
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Mila Savonik'.split(' '));
const [firstName, lastName] = 'Mila Savonik'.split(' ');
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// capitalize names
const capitalizeName = function (name) {
  const namesUpper = [];
  const names = name.split(' ');

  for (const n of names) {
    //   namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    console.log(namesUpper.join(' '));
  }
};
capitalizeName('jessica ann smith davis');
capitalizeName('liudmyla savonik');
//Padding string
const message2 = 'Go to gate 23!';
console.log(message2.padStart(25, '*').padEnd(36, '*'));
console.log('Mila'.padStart(25, '*').padEnd(50, '*'));

// Masking credit card number
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(3456478));
console.log(maskCreditCard(34564789654328765));
console.log(maskCreditCard('34564789654328765123'));

// Repeat
// (delayed plane)
const message3 = 'Bad waether... All Departues Delayed... ';
console.log(message3.repeat(5));

//( plane waiting in the line)
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(11);

////////////////////////////////
// 121 Work wiht strings
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

// 2  Read lenght property
console.log(airline.length);
console.log('B737'.length);
// metods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal')); //-1
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// use case: extract part of the string
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// negative  extracting from end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//
const checkMiddleSeat = function (seat) {
  // B and E middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

const checkWindowSeat = function (seat) {
  // A and F window seat
  const s = seat.slice(-1);
  if (s === 'A' || s === 'F') console.log('You got lucky 😎');
  else console.log('You can pay for window seat 😜');
};
checkWindowSeat('10A');
checkWindowSeat('34D');
checkWindowSeat('3F');

console.log(new String('Mila'));
console.log(typeof new String('Mila'));
console.log(typeof new String('Mila').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalzation in name
const passenger = 'lIudMyla'; // Liudmyla
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const correctNamePassenger = function (passenger) {
  const correctName =
    passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
  console.log(correctName);
};
correctNamePassenger('anDrey');
correctNamePassenger('DOR');
correctNamePassenger('nisim');

// Comparing emails
const email = 'hello@mila.co.il';
const loginEmail = ' Hello@Mila.co.Il \n'; // enter
//1 converted to lowerCase
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing  in string
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // using chain
console.log(priceUS);

const announcment =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcment.replaceAll('door', 'gate'));
console.log(announcment.replace(/door/g, 'gate'));

// metods that return boolean
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.startsWith('Boing'));
console.log(plane1.startsWith('Air'));
if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of NEW AIRbus family');
}
// Practce extrasize
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
