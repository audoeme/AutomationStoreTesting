# Automation Test Store - Playwright E2E Tests

This project contains end-to-end (E2E) automated tests for the [Automation Test Store](https://automationteststore.com/) using **Playwright** with **TypeScript**.  

The main goal is to validate critical functionalities such as navigation, product search, shopping cart and user login.

---

## 📦 Technologies Used

- Node.js + npm
- Playwright (with Test Runner)
- TypeScript
- dotenv (environment variables)

---

## 📝 Best Practices Applied

- **Page Object Model (POM)** for UI abstraction
- **Robust locators** (`getByRole`, `locator('selector')`) to avoid unstable elements
- **Reliable assertions** using `expect`
- **Independent and modular tests**
- **Use of environment variables** for credentials and sensitive data

---

## 🚀 How to Run

- Install dependencies:
  - `npm install`
  - `npx playwright install`

- Run all tests:
  - `npx playwright test`

- Run a specific test:
  - `npx playwright test tests/cart.spec.ts`

- Open HTML report:
  - `npx playwright show-report`
