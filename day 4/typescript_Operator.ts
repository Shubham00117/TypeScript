// Arithmetic operators
let a: number = 10;
let b: number = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Assignment operators
let x: number = 10;
x += 5;
x -= 3;
x *= 2;
x /= 4;
console.log(x);

// Comparison operators
let p: number = 10;
let q: number = 20;

console.log(p == q);
console.log(p === q);
console.log(p != q);
console.log(p < q);
console.log(p > q);
console.log(p <= q);
console.log(p >= q);

// Logical operators
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

// Ternary operator
let statusCode: number = 200;
let result = statusCode === 200 ? "Success" : "Failure";
console.log(result);

// Type operators
let userName: string = "Shubham";
console.log(typeof userName);

class User {}
let userObj = new User();
console.log(userObj instanceof User);

// String operators
let firstName: string = "Shubham";
let role: string = "Tester";
let fullInfo = firstName + " - " + role;
console.log(fullInfo);

// Optional chaining
let response: any = {
  data: {
    user: {
      name: "Shubham",
    },
  },
};

console.log(response?.data?.user?.name);
console.log(response?.data?.user?.email);

// Nullish coalescing
let timeout: number | null = null;
let finalTimeout = timeout ?? 5000;
console.log(finalTimeout);

// Spread operator
let browsers = ["chromium", "firefox"];
let allBrowsers = [...browsers, "webkit"];
console.log(allBrowsers);

let userData = { name: "Shubham" };
let updatedUser = { ...userData, role: "Automation Tester" };
console.log(updatedUser);

// Increment/Decrement
let count: number = 1;
count++;
++count;
console.log(count);

count--;
--count;
console.log(count);
