# Reddit Accessibility Testing Framework

A comprehensive accessibility testing framework for Reddit using Playwright, axe-core, and axe-html-reporter.

## 🎯 Features

- **Automated Accessibility Testing**: Scan web pages for WCAG 2.0, 2.1, and 2.2 compliance
- **Page Object Model (POM)**: Well-structured, maintainable test code
- **HTML Reports**: Beautiful, detailed accessibility reports generated automatically
- **Flexible Scanning**: Full page, specific elements, or with exclusions
- **Multi-level Testing**: Support for WCAG Level A, AA, AAA standards
- **Critical Violations Tracking**: Focus on critical and serious accessibility issues

## 📁 Project Structure

```
playwright-reddit-accessibility-test/
├── lib/
│   └── accessibility-helper.ts      # Core accessibility testing utilities
├── pages/
│   ├── BasePage.ts                  # Base page class with common functionality
│   ├── RedditHomePage.ts            # Reddit home page object model
│   └── RedditSubredditPage.ts       # Subreddit page object model
├── tests/
│   ├── reddit-home.accessibility.spec.ts      # Home page accessibility tests
│   └── reddit-subreddit.accessibility.spec.ts # Subreddit accessibility tests
├── accessibility-reports/           # Generated HTML reports (gitignored)
├── playwright.config.ts             # Playwright configuration
└── package.json                     # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

### Running Tests

Run all accessibility tests:

```bash
npx playwright test
```

Run specific test file:

```bash
npx playwright test tests/reddit-home.accessibility.spec.ts
```

Run tests in headed mode (see browser):

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests with UI mode (interactive):

```bash
npx playwright test --ui
```

### Viewing Reports

After tests run, accessibility reports are generated in the `accessibility-reports/` directory. Open any HTML file in your browser to see detailed violation information.

View Playwright HTML report:

```bash
npx playwright show-report
```

## 📚 Framework Components

### AccessibilityHelper

The core utility class for running accessibility scans:

```typescript
const helper = new AccessibilityHelper(page);

// Run basic scan
const results = await helper.scan();

// Run scan with specific WCAG tags
const results = await helper.scan(["wcag2a", "wcag2aa"]);

// Run scan and generate HTML report
const results = await helper.scanAndReport("my-report", ["wcag2aa"]);

// Scan specific element
const results = await helper.scanElement("#main-content");

// Get critical violations only
const critical = helper.getCriticalViolations(results);
```

### Page Objects

#### RedditHomePage

```typescript
const homePage = new RedditHomePage(page);
await homePage.navigate();
await homePage.search("accessibility");
await homePage.goToPopular();
const results = await homePage.runAccessibilityScan("home-page");
```

#### RedditSubredditPage

```typescript
const subreddit = new RedditSubredditPage(page, "programming");
await subreddit.navigate();
await subreddit.sortBy("new");
const results = await subreddit.runAccessibilityScan("programming-subreddit");
```

## 🧪 Test Examples

### Basic Accessibility Test

```typescript
test("should have no critical violations", async ({ page }) => {
  const homePage = new RedditHomePage(page);
  await homePage.navigate();

  const results = await homePage.runAccessibilityScan("report-name", [
    "wcag2a",
    "wcag2aa",
  ]);

  const helper = homePage.getAccessibilityHelper();
  const criticalViolations = helper.getCriticalViolations(results);

  expect(criticalViolations.length).toBe(0);
});
```

### Scanning Specific Elements

```typescript
test("should have accessible navigation", async ({ page }) => {
  const homePage = new RedditHomePage(page);
  await homePage.navigate();

  const helper = homePage.getAccessibilityHelper();
  const results = await helper.scanElement("nav", ["wcag2aa"]);

  expect(results.violations.length).toBe(0);
});
```

## 🎨 Customization

### Adding New Pages

1. Create a new page class extending `BasePage`:

```typescript
import { BasePage } from "./BasePage";

export class MyNewPage extends BasePage {
  // Define locators and methods
}
```

2. Create corresponding test file in `tests/`

### Custom Accessibility Rules

Disable specific rules:

```typescript
const results = await helper.scan(
  ["wcag2aa"],
  ["color-contrast", "image-alt"] // Rules to disable
);
```

### WCAG Tags Available

- `wcag2a` - WCAG 2.0 Level A
- `wcag2aa` - WCAG 2.0 Level AA
- `wcag2aaa` - WCAG 2.0 Level AAA
- `wcag21a` - WCAG 2.1 Level A
- `wcag21aa` - WCAG 2.1 Level AA
- `wcag22aa` - WCAG 2.2 Level AA
- `best-practice` - Best practices

## 📊 Understanding Results

### Violation Severity Levels

- **Critical**: Must be fixed - severe impact on accessibility
- **Serious**: Should be fixed - significant impact
- **Moderate**: Important to fix - moderate impact
- **Minor**: Nice to fix - minimal impact

### Report Sections

- **Violations**: Issues that definitely fail accessibility standards
- **Passes**: Rules that passed successfully
- **Incomplete**: Rules that need manual review
- **Inapplicable**: Rules that don't apply to the page

## 🤝 Contributing

1. Add new page objects for different Reddit sections
2. Create specialized accessibility tests for specific features
3. Enhance the AccessibilityHelper with new utility methods
4. Add integration tests for user workflows

## 📝 Best Practices

1. **Run tests regularly**: Integrate into CI/CD pipeline
2. **Fix critical violations first**: Focus on high-impact issues
3. **Review incomplete results**: Some checks require manual verification
4. **Test real user workflows**: Don't just test static pages
5. **Test across browsers**: Accessibility can vary by browser

## 🔧 Troubleshooting

### Tests Timing Out

- Increase timeout in playwright.config.ts
- Check network conditions
- Use `waitUntil: 'networkidle'` for dynamic content

### Cookie Consent Blocking Tests

- The framework includes automatic cookie consent handling
- Customize in page objects if needed

### Rate Limiting

- Add delays between tests if hitting rate limits
- Use different subreddits for different tests

## 📄 License

ISC

## 🙋 Support

For issues or questions:

1. Check Playwright documentation: https://playwright.dev/
2. Check axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
3. Review generated reports for detailed information
