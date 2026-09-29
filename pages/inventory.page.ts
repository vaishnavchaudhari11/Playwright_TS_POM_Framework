import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Showing 8 results');
    this.inventoryItems = page.getByRole('button', { name: /add to cart/i });
    this.cartLink = page.getByRole('button', { name: /cart/i });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard\/dash/);
    await expect(this.title).toBeVisible();
  }

  async addProduct(productName: string): Promise<void> {
    const product = this.page.getByRole('button', { name: /add to cart/i }).filter({ hasText: productName });
    await product.click();
  }

  async expectProductCount(count: number): Promise<void> {
    await expect(this.inventoryItems).toHaveCount(count);
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
