import { test as base, TestInfo } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createHtmlReport } from "axe-html-reporter";
import { HomePage } from "../pages/home";
import { PopularPage } from "../pages/popular";
import { ExplorePage } from "../pages/explore";
import { AxeResults } from "axe-core";

type Pages = {
  homePage: HomePage;
  popularPage: PopularPage;
  explorePage: ExplorePage;
  makeAxeBuilder: () => AxeBuilder;
  createAxeReport: (results: AxeResults, pageName: string) => void;
  attachAccessibilityResults: (
    results: AxeResults,
    testInfo: TestInfo
  ) => Promise<void>;
};

export const test = base.extend<Pages>({
  page: async ({ page }, use) => {
    await page.goto("/");
    await page.waitForLoadState();
    await use(page);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  popularPage: async ({ page }, use) => {
    const popularPage = new PopularPage(page);
    await use(popularPage);
  },
  explorePage: async ({ page }, use) => {
    const explorePage = new ExplorePage(page);
    await use(explorePage);
  },
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page }).withTags([
        "wcag2a",
        "wcag2aa",
        "wcag21a",
        "wcag21aa",
      ]);

    await use(makeAxeBuilder);
  },
  createAxeReport: async (_fixtures, use) => {
    const createAxeReport = (results: AxeResults, pageName: string) => {
      createHtmlReport({
        results: results,
        options: {
          projectKey: "Reddit Accessibility Testing",
          outputDir: "test-results/axe-core-reports",
          reportFileName: `accessibility-report-${pageName}.html`,
        },
      });
    };

    await use(createAxeReport);
  },
  attachAccessibilityResults: async (_fixtures, use) => {
    const attachAccessibilityResults = async (
      results: AxeResults,
      testInfo: TestInfo
    ) => {
      await testInfo.attach("accessibility-scan-results", {
        body: JSON.stringify(results, null, 2),
        contentType: "application/json",
      });
    };

    await use(attachAccessibilityResults);
  },
});

export { expect } from "@playwright/test";
