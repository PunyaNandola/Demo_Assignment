import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = 'input[id="username"]';
  readonly passwordInput = 'input[id="password"]';
  readonly loginButton = 'button[type="submit"], button:has-text("Login")';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://qa-takehome.dtxplus.com');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
} 