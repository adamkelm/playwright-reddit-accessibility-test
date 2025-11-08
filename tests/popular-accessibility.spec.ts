import { expect, test } from "../fixtures/base-test";

test.describe("Reddit Popular Page - Accessibility Tests", () => {
  test("popular page should not have accessibility violations", async ({
    homePage,
    createAxeReport,
    makeAxeBuilder,
    attachAccessibilityResults,
  }, testInfo) => {
    await homePage.clickPopularButton();

    const accessibilityScanResults = await makeAxeBuilder().analyze();

    await attachAccessibilityResults(accessibilityScanResults, testInfo);

    createAxeReport(accessibilityScanResults, "reddit-popular-page");

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
