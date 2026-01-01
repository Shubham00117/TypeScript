// For loop
for (let i: number = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// While loop
let count1: number = 1;

while (count1 <= 3) {
  console.log("While loop count:", count1);
  count1++;
}

// Do-while loop
let index: number = 1;

do {
  console.log("Do-while count:", index);
  index++;
} while (index <= 2);

// For...of loop - iterate arrays
let browsers2: string[] = ["chromium", "firefox", "webkit"];

for (const browser of browsers2) {
  console.log("Running on:", browser);
}

// For...in loop - iterate object keys
let user2 = {
  name: "Shubham",
  role: "Automation Tester",
};

for (const key in user2) {
  console.log(key, ":", user2[key as keyof typeof user2]);
}

// Array forEach
let testCases: string[] = ["Login", "Signup", "Logout"];

testCases.forEach((test) => {
  console.log("Executing test:", test);
});

// Break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  if (i === 5) {
    break;
  }
  console.log("Loop value:", i);
}
