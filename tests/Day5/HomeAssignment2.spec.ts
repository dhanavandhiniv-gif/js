import { chromium, test } from "@playwright/test";


test(`Create and EDit Lead`, async ({ page }) => { // {page}--> page    


    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page = await context.newPage()

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(`Democsr2`)
    await page.locator(`#password`).fill(`crmsfa`) 
    await page.locator(`.decorativeSubmit`).click()

    await page.waitForTimeout(2000);
    //verify login successful
    const homePageTitle = await page.title();
    console.log(`The title of the home page is : ${homePageTitle}`);

    await page.locator('#button').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('#createLeadForm_companyName').fill('H*L');
    await page.locator('#createLeadForm_firstName').fill('Dhana');
    await page.locator('#createLeadForm_lastName').fill('V');
    await page.locator('.smallSubmit').click();

    await page.locator('//a[text()="Edit"]').click();
    await page.locator('#updateLeadForm_companyName').fill('HCL');
    await page.locator('//input[@value="Update"]').click();
})