// function evenOdd(P1, P2) {
//   console.log("p1->", P1);
//   console.log("p2->", P2);
// }

// evenOdd(1, 2);

// const pallindrome = function evenOdd(P1, P2) {
//   console.log("p1->", P1);
//   console.log("p2->", P2);
// };

// pallindrome(1, 2);
// asking for return type
// console.log(typeof pallindrome);

//arrow function and anonymous function
const evenOdd = (P1 = 7, P2 = 8) => {
  P1 % 2 == 0 ? console.log(${P1} -> Even) : console.log(${P1} -> Odd);
  P2 % 2 == 0 ? console.log(${P2} -> Even) : console.log(${P2} -> Odd);
};
evenOdd();
//IIFE

// ((params) => {
//   console.log("iife", params);
// })(
//   //function call
//   "params value"
// );