// Arrow function
const launchBrowser = (browser: string): string => {
  return `Launching ${browser}`;
};

launchBrowser("chromium");

// Short arrow function
const square = (n: number): number => n * n;
square(5);

// Function type
type ValidationFn = (status: number) => boolean;

const validateStatus: ValidationFn = (status) => status === 200;
validateStatus(200);

// Async function
async function openPage(url: string): Promise<void> {
  console.log(`Opening ${url}`);
}

openPage("https://example.com");

// Async arrow function
const clickButton = async (selector: string): Promise<void> => {
  console.log(`Clicking ${selector}`);
};

clickButton("#login");

// Function overloading
function getResponse(value: number): number;
function getResponse(value: string): string;

function getResponse(value: any): any {
  if (typeof value === "number") {
    return value * 2;
  }
  return value.toUpperCase();
}

getResponse(10);
getResponse("success");

// Rest parameters
function logMessages(...messages: string[]): void {
  messages.forEach((msg) => console.log(msg));
}

logMessages("Test started", "Login success", "Logout");

// Callback function
function execute(fn: () => void): void {
  fn();
}

execute(() => console.log("Executing callback"));

// Example function
async function loginFlow(username: string, password: string): Promise<boolean> {
  console.log("Entering username");
  console.log("Entering password");
  console.log("Click login");
  return true;
}

loginFlow("admin", "admin123");
