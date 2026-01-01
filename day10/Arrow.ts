// Arrow function with parameters
var sum1 = (x: number, y: number): number => {
  return x + y;
};
sum1(10, 20);
console.log(sum1(10, 20));

// Arrow function with multiple statements
var fullName = (firstName: string, lastName: string): string => {
  console.log(firstName + "    " + lastName);
  return firstName + "   " + lastName;
};
fullName("xyz", "abc");
console.log(fullName("def", "ffj"));

// Parameterless arrow function
var name5 = () => {
  console.log("Welcome to Typescript");
};

var name6 = () => console.log("Welcom to typescript");

// Arrow function with return type
var sumofnumbers = (num1: number, num2: number): number => {
  return num1 * num2;
};

// Arrow function single line
var sumreturn = (num1: number, num2: number) => num1 + num2;

// Function overloading
function data(a: number, b: number): number;
function data(a: string, b: string): string;

function data(a: any, b: any): any {
  console.log(a + b);
}
