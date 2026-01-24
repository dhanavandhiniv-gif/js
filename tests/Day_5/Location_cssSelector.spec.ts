import {chromium, test} from "@playwright/test"
test(`Test to learn CSS selectors`,async() => {
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(`Democsr2`) // CSS selector by ID
    //await page.locator(`input[id="username"]`).fill(`crmsfa`) // input[id="password"] --> unique web elemnt to interact with password text box
    //await page.locator(`.inputLogin`).nth(1).fill(`crmsfa`)
    //await page.locator(`.inputLogin`).first().fill(`crmsfa`)

    await page.locator(`#password`).fill(`crmsfa`) // CSS selector by class
    //await page.locator(`input[id="password"]`).fill(`crmsfa`) // input[id="password"] --> unique web elemnt to interact with password text box
    //await page.locator(`.inputLogin`).nth(1).fill(`crmsfa`)
    //await page.locator(`.inputLogin`).last().fill(`crmsfa`)

    await page.locator(`.decorativeSubmit`).click() // CSS selector by attribute

    await page.waitForTimeout(3000)
})