// Importing classes
import { AuthPage } from "../pages/AuthPage";
import { DashboardPage } from "../pages/dashBoardPage";

// Importing utility functions
import { logStep, validateStatus } from "../utils/TestHelper";

// Importing interface
import { UserModel } from "../models/UserModel";

// Create page objects
const auth = new AuthPage();
const dashboard = new DashboardPage();

// Execute test steps
logStep("Test started");

const loginResult = auth.loginUser("admin", "admin123");
console.log("Login result:", loginResult);

dashboard.verifyDashboard();

// Create user data
const userData: UserModel = {
  id: 101,
  username: "shubham",
  email: "shubham@gmail.com",
};

console.log(userData);

console.log("Status valid:", validateStatus(200));
