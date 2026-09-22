import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.inventoryItems = page.getByTestId('inventory-item');
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }

  async addProduct(productName: string): Promise<void> {
    const product = this.page.getByTestId('inventory-item').filter({ hasText: productName });
    await product.getByRole('button', { name: /add to cart/i }).click();
  }

  async expectProductCount(count: number): Promise<void> {
    await expect(this.inventoryItems).toHaveCount(count);
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
