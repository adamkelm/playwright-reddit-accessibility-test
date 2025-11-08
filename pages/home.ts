import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly logo: Locator;
  readonly searchInput: Locator;
  readonly popularButton: Locator;
  readonly allButton: Locator;
  readonly exploreButton: Locator;

  constructor(page: Page) {
    this.logo = page.getByLabel("Home");
    this.searchInput = page.getByRole("searchbox");
    this.popularButton = page.getByRole("link", { name: "Popular" });
    this.allButton = page.getByRole("link", { name: "All" });
    this.exploreButton = page.getByRole("link", { name: "Explore" });
  }

  async clickPopularButton(): Promise<void> {
    await this.popularButton.click();
  }

  async clickAllButton(): Promise<void> {
    await this.allButton.click();
  }

  async clickExploreButton(): Promise<void> {
    await this.exploreButton.click();
  }
}
