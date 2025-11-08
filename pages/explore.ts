import { Page, Locator } from "@playwright/test";

export class ExplorePage {
  readonly logo: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.logo = page.getByLabel("Home");
    this.searchInput = page.getByRole("searchbox");
  }

  async clickLogo(): Promise<void> {
    await this.logo.click();
  }

  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchInput.press("Enter");
  }
}
