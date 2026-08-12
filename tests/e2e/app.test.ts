import { test, expect } from "@playwright/test";

test.describe("Web Application", () => {
  test("should load the application and render content", async ({ page }) => {
    await page.goto("/");

    const title = page.locator("head > title");
    const titleText = await title.textContent();
    expect(titleText).toBeTruthy();

    const body = page.locator("body");
    const bodyText = await body.textContent();
    expect(bodyText).toBeTruthy();
  });
});
