// for object concept
const person1 = {
  name: "aqsa",
  age: 20,
  gender: "F",
  address: {
    city: "london",
  },
  array: [1, 2],
  sayhellow: function () {
    return "hellow harry";
  },
};

const { name } = person1;
console.log("person 1 name destructed-->", name);
