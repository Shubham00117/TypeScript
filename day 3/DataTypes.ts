// Basic types
let baseUrl: string = "https://example.com";
let username: string = "admin";
let password: string = "admin123";

let timeout1: number = 5000;
let retryCount: number = 3;

let isLoginSuccessful: boolean = true;

// Array
let browsers1: string[] = ["chromium", "firefox", "webkit"];
let userRoles: Array<string> = ["admin", "tester", "manager"];

// Union types
let responseStatus: number | string;
responseStatus = 200;
responseStatus = "OK";

// Object
let loginData: {
  username: string;
  password: string;
} = {
  username: "admin",
  password: "admin123",
};

// Any type
let apiResponse: any;
apiResponse = { status: 200, message: "Success" };

// Unknown type
let responseBody: unknown;
if (typeof responseBody === "object") {
  console.log("Response is an object");
}

// Constants
const LOGIN_BUTTON = "#loginBtn";
const USERNAME_INPUT = "#username";
const PASSWORD_INPUT = "#password";
const HOME_PAGE_URL = "https://example.com/home";

// Function return types
function logStep1(step: string): void {
  console.log(step);
}

logStep1("Login test started");

function failTest(message: string): never {
  throw new Error(message);
}
