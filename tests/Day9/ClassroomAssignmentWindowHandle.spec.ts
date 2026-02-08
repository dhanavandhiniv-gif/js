import { test } from "@playwright/test";


test(`Learn window handling sequential`, async ({ page, context }) => {


await page.goto(`https://www.flipkart.com/`);


const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`)

await searchBox.fill(`Laptops`);

await searchBox.press("Enter");


const newPage = context.waitForEvent('page') // enable a listener before an event occurs // click action


const product = page.locator("(//div[contains(@class,'RG5Slk')][contains(.,'MOTOROLA Motobook')])[1]");
await product.click();

const childPage = await newPage

console.log(await page.title());

console.log(await childPage.title());


await page.bringToFront(); // page => parent page


await page.locator(`//span[text()="Electronics"]`).click()


await page.waitForTimeout(3000)


await childPage.bringToFront();


})