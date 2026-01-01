// Basic function
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);

// Void function
function logStep(step: string): void {
  console.log(step);
}

logStep("Login test started");

// Optional parameter
function login(user: string, password?: string): string {
  return password ? "Login Success" : "Password Missing";
}

login("admin");
login("admin", "admin123");

// Default parameter
function waitForTimeout(timeout: number = 5000): number {
  return timeout;
}

waitForTimeout();
waitForTimeout(3000);

// Function returning boolean
function isStatusSuccess(statusCode: number): boolean {
  return statusCode === 200;
}

isStatusSuccess(200);

// Function returning object
function getUserData(): { username: string; role: string } {
  return {
    username: "admin",
    role: "tester",
  };
}

const user4 = getUserData();

// Function returning array
function getBrowsers(): string[] {
  return ["chromium", "firefox", "webkit"];
}

getBrowsers();
