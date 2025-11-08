# Test Results - Reddit Accessibility Test Suite

## Test Execution Summary

**Date:** November 8, 2025  
**Total Tests:** 3 tests  
**Passed:** 0 tests (0%)  
**Failed:** 3 tests (100%) - **Real Accessibility Violations Discovered**

---

## Discovered Accessibility Violations

This test suite has identified multiple **real accessibility violations** on Reddit's website across three pages tested. These violations affect users with disabilities and violate WCAG 2.0 and 2.1 standards at both Level A and AA.

### Critical Severity Issues

#### VIOLATION-001: Improper ARIA Attributes on Progress Bar - Severity: 🔴 Critical

**Affected Pages:** Popular Page  
**Test File:** `tests/popular-accessibility.spec.ts`  
**WCAG Violation:** WCAG 4.1.2 (Name, Role, Value) - Level A  
**Rule ID:** `aria-allowed-attr`

**Description:**  
Custom `shreddit-progress-bar` elements use `aria-valuemin="0"` which is not allowed for elements without a valid role. This prevents screen readers from correctly interpreting media controls.

**Impact:**

- Screen readers cannot properly announce media progress
- Users with visual impairments cannot track video/audio playback position
- Violates WCAG 2.1 Level A requirements

**Elements Affected:**

- Multiple video player progress bars throughout the Popular page
- Media UI components in post previews

**Expected Behavior:**  
Progress bar elements should either:

1. Have a proper ARIA role (e.g., `role="progressbar"`)
2. Not use ARIA attributes that require specific roles
3. Use semantic HTML elements with proper roles

**Recommendation:**  
Reddit should update their custom `shreddit-progress-bar` component to include `role="progressbar"` or remove the ARIA attributes that require a role.

---

#### VIOLATION-002: Prohibited ARIA Label on Custom Element - Severity: 🔴 Critical

**Affected Pages:** Popular Page  
**Test File:** `tests/popular-accessibility.spec.ts`  
**WCAG Violation:** WCAG 4.1.2 (Name, Role, Value) - Level A  
**Rule ID:** `aria-prohibited-attr`

**Description:**  
The `aria-label` attribute is being used on `shreddit-progress-bar` elements that don't have a valid role attribute. ARIA labels cannot be used on custom elements without explicit roles.

**Impact:**

- Screen readers may ignore or misinterpret the intended label
- Users relying on assistive technology cannot understand element purpose
- Confusing experience for users with disabilities

**Elements Affected:**

- `shreddit-progress-bar` with `aria-label="Media time"`
- Multiple instances across video players

**Expected Behavior:**  
Elements using `aria-label` must have a valid ARIA role or be semantic HTML elements that inherently support labels.

**Recommendation:**  
Add appropriate ARIA roles to custom elements before applying ARIA attributes, or use semantic HTML with native accessibility support.

---

### Serious Severity Issues

#### VIOLATION-003: Links Without Discernible Text - Severity: 🔴 High

**Affected Pages:** Home Page, Popular Page  
**Test File:** Multiple test files  
**WCAG Violation:** WCAG 2.4.4 (Link Purpose), WCAG 4.1.2 (Name, Role, Value) - Level A  
**Rule ID:** `link-name`

**Description:**  
Advertisement links (`shreddit-dynamic-ad-link`) have no visible text, aria-label, title, or other way for screen readers to announce their purpose.

**Impact:**

- Screen reader users encounter unlabeled links with no context
- Users cannot determine link purpose before activating
- Navigation becomes confusing and unpredictable
- Violates WCAG Level A requirements

**Elements Affected:**

- `<a>` elements with `tabindex="-1"` and `rel="noopener nofollow sponsored"`
- Links with `role="link"` but no accessible name
- Multiple advertisement links across pages

**Expected Behavior:**  
All links must have discernible text through one of:

- Visible text content
- `aria-label` attribute
- `aria-labelledby` attribute
- `title` attribute
- Text within child elements

**Recommendation:**  
Add appropriate labels to all advertisement links, such as `aria-label="Sponsored content: [brief description]"` to provide context to screen reader users.

---

#### VIOLATION-004: Improper List Structure - Severity: 🔴 High

**Affected Pages:** Popular Page  
**Test File:** `tests/popular-accessibility.spec.ts`  
**WCAG Violation:** WCAG 1.3.1 (Info and Relationships) - Level A  
**Rule ID:** `list`

**Description:**  
`<ul>` elements contain direct children that are not `<li>`, `<script>`, or `<template>` elements. Custom elements like `faceplate-tracker` are placed directly inside lists without proper list item wrappers.

**Impact:**

- Screen readers cannot properly announce list structure
- Users miss context about number of items and position
- List navigation features in assistive technology don't work correctly
- Document structure becomes semantically invalid

**Elements Affected:**

- Trending topics carousel with `<ul id="list">` containing `faceplate-tracker` elements
- Popular communities list with `<ul>` containing buttons and role="presentation" items

**Expected Behavior:**  
List elements must only contain:

- `<li>` elements for list items
- `<script>` elements for scripts
- `<template>` elements for templates

**Recommendation:**  
Wrap custom elements in proper `<li>` tags or restructure the component to use semantic HTML without lists if list semantics aren't needed.

---

#### VIOLATION-005: List Items Without Parent List - Severity: 🔴 High

**Affected Pages:** Popular Page  
**Test File:** `tests/popular-accessibility.spec.ts`  
**WCAG Violation:** WCAG 1.3.1 (Info and Relationships) - Level A  
**Rule ID:** `listitem`

**Description:**  
Multiple `<li>` elements exist without being contained in a `<ul>` or `<ol>` parent element. This occurs in the trending topics section and popular communities sidebar.

**Impact:**

- Screen readers announce list items incorrectly
- Users lose context about list membership
- Document structure is semantically incorrect
- Navigation and comprehension become difficult

**Elements Affected:**

- Trending topic items: `<li class="m-0">` without proper list parent
- Popular communities: `<li id="popular-communities-list">` without proper list wrapper
- Multiple instances throughout navigation components

**Expected Behavior:**  
All `<li>` elements must be direct children of either `<ul>` or `<ol>` elements to maintain proper document structure.

**Recommendation:**  
Audit component hierarchy to ensure all list items are properly contained within list elements. Restructure DOM if components don't semantically represent lists.

---

#### VIOLATION-006: Nested Interactive Controls - Severity: 🔴 High

**Affected Pages:** Popular Page  
**Test File:** `tests/popular-accessibility.spec.ts`  
**WCAG Violation:** WCAG 4.1.2 (Name, Role, Value) - Level A  
**Rule ID:** `nested-interactive`

**Description:**  
A `<span role="button">` contains a focusable `<button>` element as a descendant, creating nested interactive controls. This occurs in the gallery carousel navigation.

**Impact:**

- Screen readers may not announce nested controls correctly
- Focus management becomes problematic
- Users may accidentally trigger multiple controls
- Keyboard navigation becomes unpredictable

**Elements Affected:**

- Gallery carousel navigation with span button containing actual button
- Next/Previous buttons in `shreddit-gallery-carousel`

**Expected Behavior:**  
Interactive controls should not contain other interactive controls. Each interactive element should be independent.

**Recommendation:**  
Remove the wrapper `<span role="button">` and use the actual `<button>` element directly, or remove the button role from the span if it's only a container.

---

## 📊 Test Coverage Analysis

### Tests by Page

#### Home Page Tests (1 test) - 0% Passing (0/1)

**Tests:** `tests/home-accessibility.spec.ts`

**Test Cases:**

- ❌ Home page should not have accessibility violations

**Violations Found:**

- Links without discernible text (advertisement links)
- Various ARIA and structural issues

**Status:** **FAILING** - Multiple accessibility violations detected

---

#### Popular Page Tests (1 test) - 0% Passing (0/1)

**Tests:** `tests/popular-accessibility.spec.ts`

**Test Cases:**

- ❌ Popular page should not have accessibility violations

**Violations Found:**

- ARIA attribute issues (aria-allowed-attr, aria-prohibited-attr)
- Link name violations
- List structure violations
- Nested interactive controls
- List items without parent lists

**Status:** **FAILING** - Multiple critical and serious violations detected

---

#### Explore Page Tests (1 test) - 0% Passing (0/1)

**Tests:** `tests/explore-accessibility.spec.ts`

**Test Cases:**

- ❌ Explore page should not have accessibility violations

**Violations Found:**

- Similar violations to Popular page
- ARIA attribute misuse
- Structural issues with lists

**Status:** **FAILING** - Multiple violations detected

---

## 🎯 Violations by Severity

### Critical (2 violations)

1. **VIOLATION-001**: Improper ARIA attributes on progress bars
2. **VIOLATION-002**: Prohibited ARIA labels on custom elements

### High (4 violations)

3. **VIOLATION-003**: Links without discernible text
4. **VIOLATION-004**: Improper list structure
5. **VIOLATION-005**: List items without parent lists
6. **VIOLATION-006**: Nested interactive controls

---

## 🛠️ Test Approach and Strategy

### Framework Choice Justification

**Playwright + axe-core** was selected for this accessibility testing framework because:

- **Playwright**: Modern browser automation with excellent TypeScript support and built-in waiting strategies
- **axe-core**: Industry-standard accessibility testing engine developed by Deque Systems
- **axe-html-reporter**: Professional HTML report generation with detailed violation information
- **Page Object Model**: Maintainable test structure with reusable page objects

### Test Organization

- **Page Objects** (`pages/`): HomePage, PopularPage, ExplorePage classes with locators and interaction methods
- **Fixtures** (`fixtures/base-test.ts`): Custom test fixtures for dependency injection of page objects and utilities
- **Test Suites** (`tests/`): Organized by page with descriptive test names
- **Type Safety** (TypeScript): Strong typing throughout for maintainability
- **Utilities** (`fixtures/`): Centralized fixtures for AxeBuilder, report creation, and result attachment

### Test Coverage Strategy

1. **Page-Level Testing**: Scan complete pages for comprehensive accessibility coverage
2. **WCAG Standards**: Test against WCAG 2.0 Level A, AA and WCAG 2.1 Level A, AA
3. **Automated Scanning**: Use axe-core to automatically detect common accessibility issues
4. **Report Generation**: Create detailed HTML reports for each page scanned
5. **Fixture Pattern**: Use Playwright fixtures for clean test setup and teardown
6. **Auto-Navigation**: Automatically navigate to baseURL before each test
7. **Idiomatic Patterns**: Use Playwright's built-in waiting strategies for stability

### Test Data Approach

- **Target URL**: https://www.reddit.com (configured as baseURL)
- **WCAG Tags**: wcag2a, wcag2aa, wcag21a, wcag21aa
- **Page Objects**: HomePage with navigation to Popular and Explore pages
- **Report Location**: test-results/axe-core-reports/
- **Report Naming**: accessibility-report-${pageName}.html

---

## 🎯 Skills Demonstrated in This Project

### Test Automation Expertise

- **Accessibility Testing**: Comprehensive WCAG compliance testing with automated scanning
- **Page Object Model**: Clean separation of page interactions and test logic
- **Fixture Pattern**: Playwright's dependency injection for maintainable test setup
- **TypeScript Proficiency**: Full type safety with custom types for fixtures and page objects
- **Modern Tooling**: Playwright, axe-core, axe-html-reporter integration
- **Report Generation**: Automated HTML report creation with detailed violation information
- **Test Strategy**: Systematic approach to accessibility testing across multiple pages

### Quality Assurance Skills

- **WCAG Knowledge**: Understanding of WCAG 2.0, 2.1, and 2.2 standards and levels
- **Bug Documentation**: Professional documentation of accessibility violations with severity classification
- **Root Cause Analysis**: Identification of systematic accessibility issues across pages
- **Compliance Testing**: Validation against international accessibility standards
- **Test Organization**: Clear test structure with descriptive naming and proper grouping
- **Report Analysis**: Interpretation of axe-core results and violation documentation

### Technical Implementation

- **TypeScript Proficiency**: Full type safety with interfaces for fixtures
- **Design Patterns**: Page Object Model, Fixture pattern for test organization
- **Code Organization**: Clean project structure with separation of concerns
- **Error Handling**: Proper test assertions and result validation
- **Version Control**: Professional Git practices

### Documentation & Communication

- **Professional Bug Reports**: Detailed violation reports with WCAG references
- **Technical Documentation**: Comprehensive README with setup and usage instructions
- **Test Results Analysis**: Detailed summary of violations by severity and page
- **Clear Communication**: Technical accessibility issues explained clearly

### Tools & Technologies

- **Playwright**: Browser automation with TypeScript support
- **axe-core**: Industry-standard accessibility testing engine
- **axe-html-reporter**: Professional HTML report generation
- **TypeScript**: Strong typing for maintainable code
- **Node.js/npm**: Package management and script automation
- **Git/GitHub**: Version control and collaboration

---

## 💡 Recommendations

### For Reddit Development Team

1. **Fix ARIA Attribute Issues (VIOLATION-001, VIOLATION-002)**

   - Impact: Critical - prevents proper screen reader interpretation
   - Effort: Medium - requires updating custom component definitions
   - Timeline: High priority - violates WCAG Level A requirements
   - Action: Add proper ARIA roles to `shreddit-progress-bar` components

2. **Add Labels to Advertisement Links (VIOLATION-003)**

   - Impact: High - links are completely unlabeled for screen readers
   - Effort: Low - add aria-label attributes
   - Timeline: Immediate - quick fix with high impact
   - Action: Add descriptive labels like "Sponsored content" to ad links

3. **Fix List Structure Issues (VIOLATION-004, VIOLATION-005)**

   - Impact: High - incorrect document structure confuses assistive technology
   - Effort: Medium - requires DOM restructuring
   - Timeline: High priority - affects navigation and comprehension
   - Action: Ensure all list items are properly contained in list elements

4. **Remove Nested Interactive Controls (VIOLATION-006)**
   - Impact: High - causes focus management problems
   - Effort: Low - simplify component structure
   - Timeline: Should be fixed soon - affects keyboard navigation
   - Action: Remove redundant button roles or nested button elements

### For Test Framework Enhancement

5. **Expand Test Coverage**

   - Add tests for logged-in user flows
   - Test subreddit pages with different content types
   - Add tests for comment sections and forms
   - Test mobile responsive views

6. **Add Partial Page Scanning**

   - Scan specific components individually
   - Test isolated UI elements
   - Focus on high-risk areas like forms and navigation

7. **Implement Manual Test Cases**

   - Some accessibility issues require manual verification
   - Document manual test procedures
   - Create checklist for manual accessibility review

8. **Add Performance Monitoring**
   - Track scan execution time
   - Monitor for performance regressions
   - Optimize scanning strategies for large pages

---

## Test Results Summary by Page

| Page        | Total Tests | Passed | Failed | Pass Rate |
| ----------- | ----------- | ------ | ------ | --------- |
| Home        | 1           | 0      | 1      | 0%        |
| Popular     | 1           | 0      | 1      | 0%        |
| Explore     | 1           | 0      | 1      | 0%        |
| **Overall** | **3**       | **0**  | **3**  | **0%**    |

---

## Conclusion

This test suite has successfully identified **6 major categories of accessibility violations** on Reddit's website affecting multiple pages. The failures indicate:

- **Critical Issues**: ARIA attribute misuse preventing proper screen reader interpretation
- **High Severity**: Unlabeled links, improper list structure, nested interactive controls
- **WCAG Compliance**: Multiple violations of WCAG 2.0 and 2.1 Level A and AA standards

The **0% pass rate** reflects genuine accessibility issues that impact users with disabilities. The test framework itself is robust and production-ready, demonstrating professional accessibility testing practices including:

- Page Object Model architecture for maintainability
- Comprehensive WCAG standard coverage
- Automated report generation with detailed violation information
- Idiomatic Playwright patterns for test stability
- Fixture-based dependency injection for clean test organization

These accessibility violations should be addressed to ensure Reddit is usable by people with disabilities and meets international accessibility standards (WCAG 2.0, 2.1, ADA, Section 508).

See the generated HTML reports in `test-results/axe-core-reports/` for detailed violation information including:

- Specific HTML elements affected
- Help text and documentation links
- Code snippets showing the problematic markup
- Recommendations for fixes
