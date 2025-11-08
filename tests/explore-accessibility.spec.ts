import { expect, test } from "../fixtures/base-test";

test.describe("Reddit Explore Page - Accessibility Tests", () => {
  test("explore page should not have accessibility violations", async ({
    homePage,
    page,
    createAxeReport,
    makeAxeBuilder,
    attachAccessibilityResults,
  }, testInfo) => {
    await homePage.clickExploreButton();
    await page.waitForLoadState();

    const accessibilityScanResults = await makeAxeBuilder().analyze();

    await attachAccessibilityResults(accessibilityScanResults, testInfo);

    createAxeReport(accessibilityScanResults, "reddit-explore-page");

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
