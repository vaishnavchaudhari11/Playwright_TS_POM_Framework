import { test } from '../fixtures/test.fixture';
import { users } from '../utils/test-data';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.expectLoaded();
  });

  test('allows a standard user to sign in', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
    await inventoryPage.expectProductCount(6);
  });

  test('shows an error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid_user', 'invalid_password');
    await loginPage.expectError('Username and password do not match');
  });
});
