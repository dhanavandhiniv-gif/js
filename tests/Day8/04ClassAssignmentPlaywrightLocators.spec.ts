import { test } from "@playwright/test";


test(`Learn playwright locators`,async ({page}) => {

await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.getByText("Username",{exact:true}).fill(`Demosalesmanager`);
await page.getByLabel("Password").fill(`crmsfa`);
await page.getByRole("button",{name:"Login"}).click();
await page.getByRole("link",{name:"CRM/SFA"}).click();
await page.getByAltText("Get help from an opentaps Partner").isVisible();
await page.getByTitle("My Home | opentaps CRM").isVisible();

})