// Exporting class
export class AuthPage {
  openAuthPage(): void {
    console.log("Opening authentication page");
  }

  loginUser(username: string, password: string): boolean {
    console.log(`Logging in user: ${username}`);
    return true;
  }
}
