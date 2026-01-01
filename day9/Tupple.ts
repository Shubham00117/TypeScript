// Tuple - fixed-length array with fixed types
let userInfo: [number, string, boolean];

userInfo = [101, "Shubham", true];
console.log(userInfo);

// Access tuple values
console.log(userInfo[0]);
console.log(userInfo[1]);
console.log(userInfo[2]);

// Modify tuple value
userInfo[1] = "Automation Tester";
console.log(userInfo);

// Tuple in function
function getUser(): [number, string] {
  return [200, "Success"];
}

const response3 = getUser();
console.log(response3);

// Array of tuples
let users: [number, string][] = [
  [1, "Admin"],
  [2, "Tester"],
  [3, "Manager"],
];

for (const user of users) {
  console.log(user[0], user[1]);
}

// Optional element in tuple
let product: [number, string, number?];
product = [101, "Laptop"];
product = [102, "Mobile", 50000];
console.log(product);

// Readonly tuple
let coordinates: readonly [number, number] = [10, 20];
console.log(coordinates);
