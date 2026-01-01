// If statement
let statusCode1: number = 200;

if (statusCode1 === 200) {
  console.log("Request Successful");
}

// If-else statement
let isLoggedIn1: boolean = false;

if (isLoggedIn1) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

// If-else if-else
let marks: number = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// Switch statement
let browser1: string = "chromium";

switch (browser1) {
  case "chromium":
    console.log("Running tests on Chromium");
    break;

  case "firefox":
    console.log("Running tests on Firefox");
    break;

  case "webkit":
    console.log("Running tests on WebKit");
    break;

  default:
    console.log("Unsupported browser");
}

// Ternary operator
let responseTime: number = 3000;
let result1 = responseTime < 5000 ? "Fast Response" : "Slow Response";
console.log(result1);

// Nested if
let userRole: string = "admin";
let hasAccess: boolean = true;

if (userRole === "admin") {
  if (hasAccess) {
    console.log("Admin access granted");
  }
}

// Example usage
let pageTitle: string = "Dashboard";

if (pageTitle.includes("Dashboard")) {
  console.log("User landed on Dashboard page");
} else {
  console.log("User landed on wrong page");
}
