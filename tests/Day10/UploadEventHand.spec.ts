import { test } from "@playwright/test";
import path from "path";


//Case2 when we don't have type="file" in DOM


test(`File Upload - DOM without type="file"`,async ({page}) => {



await page.goto(`https://the-internet.herokuapp.com/upload`);


const filePromise = page.waitForEvent("filechooser"); // listner for upload action


await page.locator(`//div[@id="drag-drop-upload"]`).click();


const fileUpload = await filePromise


await fileUpload.setFiles(path.join(__dirname,'../../Data/learningFileUpload.txt'))

await page.waitForTimeout(3000)


})