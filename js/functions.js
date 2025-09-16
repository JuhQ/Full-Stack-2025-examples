// all of these functions print hello world

const helloWorld = function () {
  console.log("Hello world");
};

helloWorld();

function helloWorld2() {
  console.log("Hello world");
}

helloWorld2();

const helloWorld3 = () => console.log("Hello world");

helloWorld3();

const helloWorld4 = () => {
  console.log("Hello world");
};

const add = (a, b, c) => a + b + c;

const add2 = (a, b, c) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  return a + b + c;
};

helloWorld4();
