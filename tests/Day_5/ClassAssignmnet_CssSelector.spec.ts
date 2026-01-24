import { chromium, test } from "@playwright/test";


test(`Test to learn CSS Selectors`, async ({ page }) => { // {page}--> page    


    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page = await context.newPage()

    await page.goto(`https://login.salesforce.com/`);

    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`);
    await page.locator(`#password`).fill(`TestLeaf@2025`);
    await page.locator(`#Login`).click();
    
    await page.waitForTimeout(3000);
    //verify login successful
    const homePageTitle = await page.title();
    console.log(`The title of the home page is : ${homePageTitle}`);
})