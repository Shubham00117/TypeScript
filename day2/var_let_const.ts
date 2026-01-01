// VAR - function-scoped, allows redeclaration
var x1 = 10;
x1 = 20;
var x1 = 30;
console.log(x1);

if (true) {
  var y = 40;
}
console.log(y);

// LET - block-scoped, allows reassignment
let a1 = 10;
a1 = 20;
console.log(a1);

if (true) {
  let b = 50;
  console.log(b);
}

// CONST - block-scoped, no reassignment
const c = 100;
console.log(c);

if (true) {
  const d = 60;
  console.log(d);
}

// CONST with object - allows property mutation
const user = {
  name: "Shubham",
  role: "Tester",
};

user.role = "Automation Tester";
console.log(user);
