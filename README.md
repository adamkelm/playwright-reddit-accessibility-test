# Playwright Reddit Accessibility Test Automation

![Playwright Tests](https://github.com/adamkelm/playwright-reddit-accessibility-test/actions/workflows/playwright.yml/badge.svg)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.56-green.svg)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A comprehensive accessibility test automation framework for Reddit built with Playwright, axe-core, and TypeScript, demonstrating professional QA engineering practices including Page Object Model (POM), WCAG compliance testing, and detailed violation documentation.

## Table of Contents

- [About This Project](#about-this-project)
- [Key Features](#key-features)
- [Skills Demonstrated](#skills-demonstrated)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Page Objects](#page-objects)
- [Architecture](#architecture)
- [Test Results](#test-results)
- [Contributing](#contributing)
- [License](#license)

## About This Project

**Educational resource demonstrating professional accessibility test automation architecture with Playwright, axe-core, and TypeScript.**

This framework showcases production-ready testing patterns for web accessibility automation, serving as a reference implementation for SDETs learning modern accessibility testing practices. The test suite covers Reddit's website, testing for WCAG 2.0, 2.1, and 2.2 compliance.

### 💼 Technical Deep Dive

This project demonstrates the test framework design and quality engineering approaches applied in professional accessibility testing. The architectural patterns shown here enable:

- **Comprehensive WCAG Coverage**: 3 page-level tests covering WCAG 2.0 Level A, AA and WCAG 2.1 Level A, AA standards
- **Violation Discovery & Documentation**: Identifies and documents 6 major categories of real accessibility violations with detailed reproduction information
- **Maintainability**: POM pattern reduces code duplication and simplifies test maintenance
- **Scalability**: Fixture-based architecture and parallel execution support large test suites
- **Type Safety**: Full TypeScript implementation with strong typing throughout
- **Professional Reporting**: Automated HTML report generation with axe-html-reporter

**Key Technical Highlights**:

- ✅ **Architecture**: Page Object Model (POM) with fixture-based dependency injection
- ✅ **Test Coverage**: 3 page-level accessibility scans covering Home, Popular, and Explore pages
- ✅ **Modern Tools**: Playwright for reliable browser automation, axe-core for industry-standard accessibility testing
- ✅ **Code Quality**: Centralized fixtures for consistent test setup and idiomatic Playwright patterns
- ✅ **Documentation**: Comprehensive README, detailed test results, and inline code documentation
- ✅ **CI/CD Ready**: Configured for GitHub Actions integration

**Test Results**: **0% Pass Rate (0/3 tests)** - Discovered 6 major categories of accessibility violations including ARIA misuse, unlabeled links, and structural issues. See [TEST_RESULTS.md](TEST_RESULTS.md) for detailed analysis.

## Key Features

- ✅ **Page Object Model**: Clean separation of page interactions and test logic
- ✅ **TypeScript**: Full type safety and IntelliSense support throughout
- ✅ **WCAG Compliance Testing**: Automated scanning for WCAG 2.0 and 2.1 Level A and AA standards
- ✅ **axe-core Integration**: Industry-standard accessibility testing engine from Deque Systems
- ✅ **Custom Fixtures**: Dependency injection for page objects, AxeBuilder, and report generation
- ✅ **Comprehensive Reporting**: HTML reports with detailed violation information using axe-html-reporter
- ✅ **Violation Documentation**: Professional bug reports with severity classification and WCAG references
- ✅ **Idiomatic Playwright**: Uses built-in waiting strategies and auto-navigation for stable tests
- ✅ **Rich Test Output**: HTML reports with screenshots, traces, and JSON result attachments

## �️ Skills Demonstrated

### Test Automation & QA

- Accessibility test design and implementation for web applications
- Page Object Model (POM) architecture for maintainable UI tests
- WCAG 2.0, 2.1, and 2.2 compliance testing and validation
- Violation identification, documentation, and detailed reporting with severity classification
- Automated report generation with axe-html-reporter
- Test fixture patterns for clean dependency injection
- Idiomatic Playwright patterns with built-in waiting strategies

### Technical Skills

- **Languages**: TypeScript, JavaScript (ES6+)
- **Frameworks**: Playwright Test, axe-core for accessibility testing, axe-html-reporter
- **Tools**: Git, npm, ESLint for code quality
- **Methodologies**: Agile testing, accessibility-first testing approach
- **Best Practices**: DRY principles, SOLID design patterns, fixture pattern for dependency injection

### Documentation & Communication

- Technical documentation writing with clear examples
- Professional accessibility violation reports following industry standards
- Test strategy documentation and architecture decisions
- WCAG compliance testing and validation documentation

## Quick Start

```bash
# Clone the repository
git clone https://github.com/adamkelm/playwright-reddit-accessibility-test.git
cd playwright-reddit-accessibility-test

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npm test

# Run tests in UI mode for interactive debugging
npm run test:ui

# View HTML test report
npm run report
```

## Project Structure

```
├── fixtures/                     # Custom test fixtures
│   └── base-test.ts             # Dependency injection for page objects and utilities
├── pages/                        # Page Object Model classes
│   ├── home.ts                  # Home page with navigation methods
│   ├── popular.ts               # Popular page object model
│   └── explore.ts               # Explore page object model
├── tests/                        # Test files organized by page
│   ├── home-accessibility.spec.ts      # Home page accessibility test (1 test)
│   ├── popular-accessibility.spec.ts   # Popular page accessibility test (1 test)
│   └── explore-accessibility.spec.ts   # Explore page accessibility test (1 test)
├── test-results/                 # Test execution results and reports
│   └── axe-core-reports/        # Generated HTML accessibility reports
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Dependencies and scripts
├── README.md                     # This file
└── TEST_RESULTS.md              # Detailed test results and violation reports
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode for interactive debugging
npm run test:ui

# Run tests in headed mode (with browser visible)
npm run test:headed

# Run specific browser
npm run test:chromium

# Run specific test file
npx playwright test tests/home-accessibility.spec.ts
npx playwright test tests/popular-accessibility.spec.ts

# List all tests without running them
npx playwright test --list
```

## Test Reports

After running tests, view detailed reports:

```bash
# Open HTML report
npm run report
```

The framework generates comprehensive test reports including:

- Test execution summary with pass/fail statistics
- Detailed accessibility violation information with WCAG references
- Screenshots and videos of test execution
- JSON attachments with full axe-core scan results
- Step-by-step execution traces for debugging

**Accessibility HTML Reports:**

Located in `test-results/axe-core-reports/`:

- `accessibility-report-reddit-home-page.html`
- `accessibility-report-reddit-popular-page.html`
- `accessibility-report-reddit-explore-page.html`

Each report includes:

- Detailed violation descriptions
- Affected HTML elements
- WCAG standard references
- Help documentation and fix recommendations
- Impact severity (Critical, Serious, Moderate, Minor)

**Current Test Results Summary:**

- **Total Tests**: 3
- **Passed**: 0 tests (0%)
- **Failed**: 3 tests (100%) - **Real accessibility violations discovered**

See [TEST_RESULTS.md](TEST_RESULTS.md) for:

- Detailed violation reports with WCAG references
- Expected vs actual behavior analysis
- Accessibility behavior documentation
- Violations categorized by severity

## Page Objects

### HomePage (`pages/home.ts`)

The HomePage class provides methods for interacting with Reddit's home page and navigating to other sections.

**Key Methods:**

- `clickPopularButton()` - Navigate to the Popular page
- `clickAllButton()` - Navigate to All posts
- `clickExploreButton()` - Navigate to the Explore page

**Locators:**

- `logo` - Reddit logo for navigation
- `searchInput` - Search input field
- `popularButton` - Popular navigation button
- `allButton` - All posts button
- `exploreButton` - Explore button

### PopularPage (`pages/popular.ts`)

The PopularPage class provides methods for interacting with Reddit's Popular page.

**Key Methods:**

- `clickLogo()` - Return to home page
- `search(query)` - Search from Popular page

**Locators:**

- `logo` - Reddit logo
- `searchInput` - Search field

### ExplorePage (`pages/explore.ts`)

The ExplorePage class provides methods for interacting with Reddit's Explore page.

**Key Methods:**

- `clickLogo()` - Return to home page
- `search(query)` - Search from Explore page

**Locators:**

- `logo` - Reddit logo
- `searchInput` - Search field

## Architecture

### Page Object Model (POM)

This framework uses the Page Object Model pattern to separate test logic from page-specific code:

```typescript
// pages/home.ts - Page Object
export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly popularButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole("link", { name: "Home" });
    this.popularButton = page.getByRole("link", { name: "Popular" });
  }

  async clickPopularButton() {
    await this.popularButton.click();
  }
}
```

### Fixture-Based Dependency Injection

Custom Playwright fixtures provide clean dependency injection:

```typescript
// fixtures/base-test.ts
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
  createAxeReport: async ({}, use) => {
    const createAxeReport = (results: any, pageName: string) => {
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
});
```

### Test Structure

```typescript
// tests/home-accessibility.spec.ts
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
```

## Test Results

The test suite has discovered **6 major categories of accessibility violations** on Reddit's website:

### Critical Issues (2)

1. **Improper ARIA Attributes** - `aria-valuemin` used without valid role
2. **Prohibited ARIA Labels** - `aria-label` on custom elements without roles

### High Severity (4)

3. **Links Without Text** - Advertisement links with no accessible names
4. **Improper List Structure** - Lists containing non-list-item children
5. **List Items Without Lists** - `<li>` elements without `<ul>` or `<ol>` parents
6. **Nested Interactive Controls** - Buttons nested inside other interactive elements

See [TEST_RESULTS.md](TEST_RESULTS.md) for complete documentation with:

- Detailed reproduction steps
- Expected vs actual behavior
- Business impact analysis
- WCAG standard references
- Recommendations for fixes

## WCAG Standards Tested

This framework tests against the following WCAG standards:

- **WCAG 2.0 Level A** (`wcag2a`)
- **WCAG 2.0 Level AA** (`wcag2aa`)
- **WCAG 2.1 Level A** (`wcag21a`)
- **WCAG 2.1 Level AA** (`wcag21aa`)

**Key Principles Tested:**

- **Perceivable**: Information must be presentable to users in ways they can perceive
- **Operable**: User interface components must be operable
- **Understandable**: Information and operation must be understandable
- **Robust**: Content must be robust enough for assistive technologies

Full WCAG documentation: https://www.w3.org/WAI/WCAG21/quickref/

## Contributing

Contributions, issues, and feature requests are welcome! This is an educational project demonstrating professional accessibility test automation practices.

See [CONTRIBUTING.md](CONTRIBUTING.md) for:

- How to report bugs
- Suggesting enhancements
- Code contribution guidelines
- Style guidelines
- Pull request checklist

## License

This project is [MIT](LICENSE) licensed.

## Author

**Adam Kelm**

- GitHub: [@adamkelm](https://github.com/adamkelm)
- LinkedIn: [Adam Kelm](https://www.linkedin.com/in/adam-kelm)

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [axe-core Rule Descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Test Results Analysis](TEST_RESULTS.md)
