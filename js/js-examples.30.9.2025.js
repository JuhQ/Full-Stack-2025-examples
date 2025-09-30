const multiply = function (a, b) {
  return a * b;
};

const multiply2 = (a, b) => a * b;

const oneParam = (a = a * 2);
// const oneParam = (a) = a * 2;

const fnNoParams = () => {
  console.log("...");
};

const multiply22 = (a, b) => {
  return a * b;
};

function multiply3(a, b) {
  return a * b;
}

multiply(1, 4);

const createPerson1 = (name, age) => ({ name, age });

const createPerson2 = (name, age) => ({ name: name, age: age });
//                     juha  100
const createPerson3 = (name, age) => ({ name: "juha", age: 100 });

const createPerson4 = (name, age) => ({
  name: "juha",
  age: 100,
  object: { key: 1, value: 2 },
});
const createPerson5 = (name, age) => [name, age, { key: 123, value: 1234 }];

const createPerson6 = (name, age) => {
  name, age;
};

const isAdult = age >= 18 ? "Adult" : "Minor";

let isAdult2;

if (age >= 18) {
  isAdult2 = "Adult";
} else {
  isAdult2 = "Minor";
}

// Nested ternaries are really difficult to debug

const value1 = true;
const value2 = false;
const value3 = "????";

const outcome = value1
  ? value2
    ? "true"
    : value3
    ? "something"
    : "something else"
  : "false";

let outcome2;
if (value1) {
  if (value2) {
    outcome2 = "true";
  } else {
    if (value3) {
      outcome2 = "something";
    } else {
      outcome2 = "something else";
    }
  }
} else {
  outcome2 = "false";
}

const calculateAge = (name, age) => {
  if (name == "Juha") {
    return age * 2;
  }

  return age;
};

const calculateAge2 = (name, age) => (name == "Juha" ? age * 2 : age);

console.log("");

const myCoolFunction = (...allParams) => {
  console.log("all params", allParams);
};

// here the last param is rest, it takes all the rest of the parameters
// meaning those which have not been explicitly defined as parameters
const anotherFunction = (param1, param2, param3, ...rest) => {
  console.log(param1);
  console.log(param2);
  console.log(param3);
  console.log(rest);
};

// here we spread array into parameters
anotherFunction(...[5, 6, 7]);
// what happens under the hood
// anotherFunction(...5, 6, 7)
// anotherFunction(5, 6, 7)

const missingCity = person.address?.country?.city; // undefined

let missingCity2;

if (person.address && person.address.country && person.address.country.city) {
  missingCity2 = person.address.country.city;
}
