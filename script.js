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
