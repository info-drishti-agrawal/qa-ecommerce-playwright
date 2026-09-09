const { test, expect } = require('@playwright/test');

test.describe('Login', () => {
  test('valid user can log in', async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('invalid password shows an error message', async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('wrong_password');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('empty credentials are rejected', async ({ page }) => {
    await page.goto('/');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });
});
