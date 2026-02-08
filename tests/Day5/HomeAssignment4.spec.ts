import { test } from "@playwright/test";


test(`HomeAssignment Individual`,async ({page}) => {

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
await page.locator('//p[text()="Individuals"]').click();
await page.waitForTimeout(2000);
await page.locator('//input[@name="Individual-search-input"]').fill('Dhana');
await page.locator('//input[@name="Individual-search-input"]').press('Enter');
await page.waitForTimeout(2000);
await page.locator('//span[text()="Show Actions"]').click();
await page.locator('//a[@title="Edit"]').click();

await page.locator('(//a[@class="select"])[1]').click();
await page.locator('//a[@title="Mr."]').click();
await page.locator('//input[@placeholder="First Name"]').fill('dhana');
const firstname = await page.locator('//input[@placeholder="First Name"]').inputValue();
console.log(`The title of the home page is : ${firstname}`);
await page.locator('//span[text()="Save"]').click();
});