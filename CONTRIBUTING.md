# Contributing to Playwright Reddit Accessibility Test

Thank you for your interest in contributing to this project! This is an educational project demonstrating professional accessibility test automation practices using Playwright and axe-core.

## 🎯 Purpose

This project serves as a portfolio piece showcasing:

- Accessibility test automation with Playwright and axe-core
- TypeScript implementation with strict typing
- Page Object Model (POM) pattern for maintainable UI tests
- Professional test organization and reporting with HTML reports
- WCAG 2.0, 2.1, and 2.2 compliance testing

Contributions that enhance these educational goals are especially welcome!

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug in the test framework (not Reddit's accessibility issues):

1. Check if the issue already exists in the [Issues](../../issues) section
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (OS, Node version, browser, etc.)

### Suggesting Enhancements

Have ideas for improving the test framework? Open an issue with:

- Clear description of the enhancement
- Why it would be valuable for learning/demonstration purposes
- Example implementation (if applicable)

### Code Contributions

1. **Fork the Repository**

   ```bash
   git clone https://github.com/adamkelm/playwright-reddit-accessibility-test.git
   cd playwright-reddit-accessibility-test
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright Browsers**

   ```bash
   npx playwright install
   ```

4. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

5. **Make Your Changes**

   - Follow existing code style and patterns
   - Add tests for new page objects or functionality
   - Update documentation as needed
   - Ensure all tests pass: `npm test`
   - Run linting: `npm run lint` (if configured)

6. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat: add new feature" # or "fix: resolve bug"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/) format:

   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `test:` for test changes
   - `refactor:` for code refactoring
   - `chore:` for maintenance tasks

7. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub with:
   - Clear description of changes
   - Reference to related issues
   - Screenshots of reports if applicable

## 📋 Code Style Guidelines

### TypeScript

- Use strict typing - avoid `any`
- Follow existing patterns for page objects and fixtures
- Use interfaces for data structures
- Add JSDoc comments for complex functions

### Test Structure

- One test file per page or feature area
- Use descriptive test names that explain what's being validated
- Group related tests with `describe` blocks
- Keep tests independent and isolated
- Use custom fixtures for page object setup

### Naming Conventions

- Files: `kebab-case.ts` or `kebab-case.spec.ts`
- Classes: `PascalCase`
- Functions/Variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Types/Interfaces: `PascalCase`

### Project Structure

When adding new files, follow the existing structure:

```
pages/        → Page Object Model classes
fixtures/     → Playwright fixtures for dependency injection
tests/        → Test files organized by page or feature
```

## 🧪 Testing Guidelines

- Write tests that are clear, maintainable, and repeatable
- Test both pages with and without accessibility violations
- Validate report generation works correctly
- Test error handling and edge cases
- Add meaningful assertions with descriptive messages
- Use proper waiting strategies (waitForLoadState) not arbitrary timeouts

## 📝 Documentation

When adding new features:

- Update README.md if it affects setup or usage
- Add JSDoc comments for public methods in page objects
- Update TEST_RESULTS.md if test results change significantly
- Include examples in comments for complex functionality

## 🐛 Known Issues

Before contributing, review the [TEST_RESULTS.md](TEST_RESULTS.md) to understand current test results and Reddit's accessibility issues that have been discovered.

Note: This project tests Reddit's public website for accessibility compliance. Contributors should focus on improving the test framework, not fixing Reddit's accessibility issues (though documenting them in TEST_RESULTS.md is valuable).

## ✅ Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Code follows the project's style guidelines
- [ ] All tests pass (`npm test`)
- [ ] New tests added for new page objects or features
- [ ] Documentation updated as needed
- [ ] Commits follow conventional commit format
- [ ] PR description clearly explains changes
- [ ] No sensitive information or credentials committed

## 📧 Questions?

If you have questions about contributing:

- Open a [Discussion](../../discussions)
- Contact me on [LinkedIn](https://www.linkedin.com/in/adam-kelm)

## 📜 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for helping improve this project! 🎉
