import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Zicasso Front-end Assesment/);
});

test("Cards are visible and facedown in new game", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // card is facedown
  await expect(page.locator("div.cardgame.flipped")).toHaveCount(0);
});

test("flipping a card", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // card is facedown
  await expect(page.locator("div.cardgame:nth-child(1)")).not.toHaveClass(
    /flipped/
  );

  // Click the get started link.
  await page.locator("div.cardgame:nth-child(1)").click();

  // card has flipped and it is face up
  await expect(page.locator("div.cardgame:nth-child(1)")).toHaveClass(
    /flipped/
  );
});

test("resetting game", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // Click the get started link.
  await page.locator("div.cardgame:nth-child(1)").click();

  // card has flipped and it is face up
  await expect(page.locator("div.cardgame:nth-child(1)")).toHaveClass(
    /flipped/
  );

  // click in reset button
  await page.getByText("Reset Button").click({ force: true });
  await expect(page.locator("div.cardgame.flipped")).toHaveCount(0);
});
