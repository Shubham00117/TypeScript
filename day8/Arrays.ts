// Array declaration
let numbers: number[] = [10, 20, 30];
let names: string[] = ["Shubham", "Amit", "Rahul"];
let flags: boolean[] = [true, false, true];

console.log(numbers, names, flags);

// Array using generic syntax
let browsers3: Array<string> = ["chromium", "firefox", "webkit"];
console.log(browsers3);

// Access array elements
console.log(names[0]);
console.log(numbers[2]);

// Array length
console.log(browsers3.length);

// Add elements
browsers3.push("edge");
browsers3.unshift("safari");
console.log(browsers3);

// Remove elements
browsers3.pop();
browsers3.shift();
console.log(browsers3);

// Update element
browsers3[1] = "firefox-updated";
console.log(browsers3);

// Array iteration
for (let i = 0; i < browsers3.length; i++) {
  console.log("Browser:", browsers3[i]);
}

for (const browser of browsers3) {
  console.log("Browser (for-of):", browser);
}

// Array methods
console.log(browsers3.includes("chromium"));
console.log(browsers3.indexOf("webkit"));
console.log(browsers3.join(", "));

let selectedBrowsers = browsers3.slice(0, 2);
console.log(selectedBrowsers);

browsers3.splice(1, 1, "new-browser");
console.log(browsers3);

// Map - transform elements
let upperCaseBrowsers = browsers3.map((b) => b.toUpperCase());
console.log(upperCaseBrowsers);

// Filter - filter elements
let longNames = names.filter((name) => name.length > 5);
console.log(longNames);

// Reduce - reduce to single value
let total = numbers.reduce((sum, value) => sum + value, 0);
console.log(total);

// Multi-dimensional array
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

console.log(matrix);
console.log(matrix[1][0]);
