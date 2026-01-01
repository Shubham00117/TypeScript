// Parent class
class CorePage {
  protected pageLabel: string;

  constructor(pageLabel: string) {
    this.pageLabel = pageLabel;
  }

  openCorePage(): void {
    console.log(`Opening page: ${this.pageLabel}`);
  }

  checkCorePage(): boolean {
    console.log("Checking core page");
    return true;
  }
}

// Child class 1
class AuthPage extends CorePage {
  constructor() {
    super("Authentication");
  }

  performLogin(userId: string, userPass: string): void {
    console.log(`Logging in user: ${userId}`);
  }

  override checkCorePage(): boolean {
    console.log("Checking Authentication Page");
    return this.pageLabel === "Authentication";
  }
}

// Child class 2
class HomeScreen extends CorePage {
  constructor() {
    super("HomeScreen");
  }

  verifyHomeWidgets(): void {
    console.log("Verifying home widgets");
  }

  override checkCorePage(): boolean {
    console.log("Checking Home Screen");
    return this.pageLabel.includes("Home");
  }
}

// Child class 3
class ConfigScreen extends CorePage {
  constructor() {
    super("Configuration");
  }

  updateSettings(): void {
    console.log("Updating configuration settings");
  }

  override checkCorePage(): boolean {
    super.checkCorePage();
    console.log("Checking Configuration Screen");
    return true;
  }
}

// Create objects
const authObj = new AuthPage();
const homeObj = new HomeScreen();
const configObj = new ConfigScreen();

// Call methods
authObj.openCorePage();
authObj.performLogin("admin", "admin123");
console.log(authObj.checkCorePage());

homeObj.openCorePage();
homeObj.verifyHomeWidgets();
console.log(homeObj.checkCorePage());

configObj.openCorePage();
configObj.updateSettings();
console.log(configObj.checkCorePage());
