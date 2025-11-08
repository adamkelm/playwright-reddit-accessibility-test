import { expect, test } from "../fixtures/base-test";

test.describe("Reddit Home Page - Accessibility Tests", () => {
  test("home page should not have accessibility violations", async ({
    page,
    createAxeReport,
    makeAxeBuilder,
    attachAccessibilityResults,
  }, testInfo) => {
    const accessibilityScanResults = await makeAxeBuilder().analyze();

    await attachAccessibilityResults(accessibilityScanResults, testInfo);

    createAxeReport(accessibilityScanResults, "reddit-home-page");

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
