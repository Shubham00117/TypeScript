// Class definition
class LoginPage {
  usernameInput: string;
  passwordInput: string;
  loginButton: string;

  constructor() {
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "#login";
  }

  openLoginPage(): void {
    console.log("Opening login page");
  }

  enterUsername(username: string): void {
    console.log(`Entering username: ${username}`);
  }

  enterPassword(password: string): void {
    console.log(`Entering password: ${password}`);
  }

  clickLogin(): boolean {
    console.log("Clicking login button");
    return true;
  }
}

// Create object
const loginPage = new LoginPage();

// Call methods
loginPage.openLoginPage();
loginPage.enterUsername("admin");
loginPage.enterPassword("admin123");

const loginStatus = loginPage.clickLogin();
console.log("Login status:", loginStatus);

// Another class
class DashboardPage {
  pageTitle: string;

  constructor() {
    this.pageTitle = "Dashboard";
  }

  verifyDashboard(): boolean {
    console.log("Verifying dashboard page");
    return this.pageTitle.includes("Dashboard");
  }
}

const dashboard = new DashboardPage();
const isDashboardLoaded = dashboard.verifyDashboard();
console.log("Dashboard loaded:", isDashboardLoaded);

// Access modifiers
class User5 {
  public name: string;
  private password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  public getUserName(): string {
    return this.name;
  }

  private getPassword(): string {
    return this.password;
  }
}

const user5 = new User5("Shubham", "secret123");
console.log(user5.getUserName());

// Async method
class BasePage {
  async waitForPageLoad(): Promise<void> {
    console.log("Waiting for page to load");
  }
}

const basePage = new BasePage();
basePage.waitForPageLoad();
