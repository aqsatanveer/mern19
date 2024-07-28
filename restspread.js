//

const array = [1, 2, 3, 4, 5];
const [a, b, ...c] = array;
console.log("a", a);
console.log("b", b);
console.log("c", c);

// must be last destructuring
// restoperator destructing in object
const person = {
  id: "123",
  name: "Aqsa butt",
  age: 20,
};

const { id, ...user } = person;
console.log(user);
console.log(id);
// check
const check = ({ id, ...user }, array) => {
  console.log(user);
  console.log(id);
  console.log(array);
};
check(person, array);
// spread
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = array1;
array2[0] = 3;
console.log(array2);
console.log(array1);
// fuction
