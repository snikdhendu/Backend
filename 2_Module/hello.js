// const math=require("./math") //so here import the math module from current directory and assign it to a variable called math

// console.log(math.add1(1, 2));
// console.log(math.sub1(1, 2));

// we can even destructure it how letsee

const {add1 , sub1}=require("./math");

console.log(add1 (1 , 2));
console.log(sub1 (1 , 2));