// Interface definition
interface PageContract {
  openPage(): void;
  verifyPage(): boolean;
}

// Class implementing interface
class LoginScreen implements PageContract {
  openPage(): void {
    console.log("Opening Login Screen");
  }

  verifyPage(): boolean {
    console.log("Verifying Login Screen");
    return true;
  }

  performLogin(user: string, pass: string): void {
    console.log(`Logging in with user: ${user}`);
  }
}

// Another class implementing same interface
class ProfileScreen implements PageContract {
  openPage(): void {
    console.log("Opening Profile Screen");
  }

  verifyPage(): boolean {
    console.log("Verifying Profile Screen");
    return true;
  }

  updateProfile(): void {
    console.log("Updating profile details");
  }
}

// Using interface type
let pageObj: PageContract;

pageObj = new LoginScreen();
pageObj.openPage();
pageObj.verifyPage();

pageObj = new ProfileScreen();
pageObj.openPage();
pageObj.verifyPage();

// Interface for test data
interface UserDataModel {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
}

const userData1: UserDataModel = {
  id: 101,
  username: "shubham",
  email: "shubham@gmail.com",
  isActive: true,
};

console.log(userData1);

// Optional properties
interface BrowserConfig {
  browserName: string;
  headless?: boolean;
}

const browserSettings: BrowserConfig = {
  browserName: "chromium",
};

console.log(browserSettings);

// Readonly properties
interface ApiResponse {
  readonly statusCode: number;
  message: string;
}

const responseData: ApiResponse = {
  statusCode: 200,
  message: "Success",
};

responseData.message = "Updated";
console.log(responseData);

// Interface extending interface
interface BaseConfig {
  timeout: number;
}

interface TestConfig extends BaseConfig {
  retries: number;
}

const configData: TestConfig = {
  timeout: 5000,
  retries: 2,
};

console.log(configData);
