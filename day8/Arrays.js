// ====================== ARRAY DECLARATION ======================
// Arrays store multiple values of the same type
var numbers = [10, 20, 30];
var names = ["Shubham", "Amit", "Rahul"];
var flags = [true, false, true];
console.log(numbers, names, flags);
// ====================== ARRAY USING GENERIC SYNTAX ======================
var browsers3 = ["chromium", "firefox", "webkit"];
console.log(browsers3);
// ====================== ARRAY ACCESS ======================
// Access values using index (starts from 0)
console.log(names[0]); // Shubham
console.log(numbers[2]); // 30
// ====================== ARRAY LENGTH ======================
// Returns number of elements
console.log(browsers3.length); // 3
// ====================== ADD ELEMENTS ======================
// push → add at end
browsers2.push("edge");
// unshift → add at start
browsers2.unshift("safari");
console.log(browsers2);
// ====================== REMOVE ELEMENTS ======================
// pop → remove from end
browsers2.pop();
// shift → remove from start
browsers2.shift();
console.log(browsers2);
// ====================== UPDATE ELEMENT ======================
browsers2[1] = "firefox-updated";
console.log(browsers2);
// ====================== ARRAY ITERATION ======================
// for loop
for (var i = 0; i < browsers2.length; i++) {
    console.log("Browser:", browsers2[i]);
}
// for...of loop (preferred)
for (var _i = 0, browsers2_1 = browsers2; _i < browsers2_1.length; _i++) {
    var browser = browsers2_1[_i];
    console.log("Browser (for-of):", browser);
}
// ====================== ARRAY METHODS ======================
// includes → check if element exists
console.log(browsers2.includes("chromium")); // true
// indexOf → find index
console.log(browsers2.indexOf("webkit")); // index or -1
// join → convert array to string
console.log(browsers2.join(", "));
// slice → extract part of array
var selectedBrowsers = browsers2.slice(0, 2);
console.log(selectedBrowsers);
// splice → add/remove elements
browsers2.splice(1, 1, "new-browser");
console.log(browsers2);
// ====================== MAP ======================
// Transform array elements
var upperCaseBrowsers = browsers2.map(function (b) { return b.toUpperCase(); });
console.log(upperCaseBrowsers);
// ====================== FILTER ======================
// Filter based on condition
var longNames = names.filter(function (name) { return name.length > 5; });
console.log(longNames);
// ====================== REDUCE ======================
// Reduce array to single value
var total = numbers.reduce(function (sum, value) { return sum + value; }, 0);
console.log(total);
// ====================== MULTI-DIMENSIONAL ARRAY ======================
var matrix = [
    [1, 2],
    [3, 4],
];
console.log(matrix);
console.log(matrix[1][0]); // 3
