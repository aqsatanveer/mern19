const arrow = () => {
  return "value";
};
const array = [1, "one", true, null, undefined, [1, 2], { age: 20 }, arrow];
console.log(array);
console.log(array[7]());
console.log(array[6].age);

// methods of array classes
// push pop unshift shift includes index of
// push
// this appent new element and return new length
array.push("new value");
console.log(array);
// pop
// can remove element fo
array.pop();
console.log(array);
// we can add value at any index of arra
array[20] = "new";
console.log(array);
//update
array[array.indexOf("one") > -1 ? array.indexOf("one") : array.length] = 1;
// with objects find value with reference
console.log(array[5].includes(1));
