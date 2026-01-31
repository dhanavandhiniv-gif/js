import { test } from "@playwright/test";


test(`Test to learn dropdown interaction`,async ({page}) => {

await page.goto(`https://login.salesforce.com`);
await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`);
await page.locator(`#password`).fill(`TestLeaf@2025`);
await page.locator(`#Login`).click();
    
await page.waitForTimeout(2000);
//verify login successful
const homePageTitle = await page.title();
console.log(`The title of the home page is : ${homePageTitle}`);

await page.locator('//button[@title="App Launcher"]').click();
await page.locator('//button[text()="View All"]').click();
await page.waitForTimeout(2000);
await page.locator('//p[text()="Sales"]').click();
await page.waitForTimeout(2000);
await page.locator('//a[@title="Leads"]').click();
await page.locator('//a[@title="New"]').click();
await page.locator('//button[@name="salutation"]').click();
await page.locator('//lightning-base-combobox-item//span[text()="Mrs."]').click();
await page.locator('//input[@name="lastName"]').fill(`Dhana`);
await page.locator('//input[@name="Company"]').fill(`ComTest`);
await page.locator('//button[@name="SaveEdit"]').click();
});