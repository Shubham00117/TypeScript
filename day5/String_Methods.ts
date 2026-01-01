// String type
let message: string = "Playwright Automation";

// Length property
console.log(message.length);

// Case conversion
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// Check substring
console.log(message.includes("Automation"));
console.log(message.includes("Selenium"));

// Start/End check
console.log(message.startsWith("Playwright"));
console.log(message.endsWith("Automation"));

// Find index
console.log(message.indexOf("Automation"));
console.log(message.indexOf("Cypress"));

// Extract substring
console.log(message.substring(0, 10));
console.log(message.slice(0, 10));
console.log(message.slice(-10));

// Replace
let updatedMessage = message.replace("Automation", "Testing");
console.log(updatedMessage);

// Trim spaces
let textWithSpaces: string = "   Login Successful   ";
console.log(textWithSpaces.trim());
console.log(textWithSpaces.trimStart());
console.log(textWithSpaces.trimEnd());

// Split string
let roles: string = "admin,tester,manager";
let roleArray: string[] = roles.split(",");
console.log(roleArray);

// Concatenate
let firstName1: string = "Shubham";
let lastName: string = "Shinde";
let fullName = firstName1.concat(" ", lastName);
console.log(fullName);

// Character at index
console.log(message.charAt(0));

// Template string
let browser: string = "Chromium";
let logMessage: string = `Test running on ${browser}`;
console.log(logMessage);
