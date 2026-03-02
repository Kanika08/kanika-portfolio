#!/usr/bin/env node
/**
 * Captures light-home.png and dark-home.png from http://127.0.0.1:3000
 * Run: node capture-screenshots.mjs
 */
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.resolve(__dirname);
const lightPath = path.join(baseDir, "light-home.png");
const darkPath = path.join(baseDir, "dark-home.png");

const url = "http://127.0.0.1:3000";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.goto(url, { waitUntil: "load", timeout: 15000 });
  await page.waitForTimeout(800);

  // Force light mode
  await page.evaluate(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  });
  await page.reload({ waitUntil: "load", timeout: 15000 });
  await page.waitForTimeout(800);

  await page.screenshot({ path: lightPath, fullPage: true });
  console.log("Saved:", lightPath);

  // Toggle to dark via header button
  const themeButton = page.getByRole("button", { name: /toggle theme/i });
  await themeButton.click();
  await page.waitForTimeout(500);

  await page.screenshot({ path: darkPath, fullPage: true });
  console.log("Saved:", darkPath);

  await browser.close();
  return { lightPath, darkPath };
}

main()
  .then(({ lightPath, darkPath }) => {
    console.log("\nDone. Paths:");
    console.log("  Light:", lightPath);
    console.log("  Dark:", darkPath);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
