import { test } from "@playwright/test";
import path from "path";
test(`Learn fileUpload`,async ({page}) => {


await page.goto(`https://leafground.com/file.xhtml`);


//Case1: when we have type="file" in DOM we are not clicking the button to upload the file rather we will inject the file directly using the method called setInputFiles()


const uploadFile = page.locator(`(//input[@type="file"])[1]`)


await uploadFile.setInputFiles(path.join(__dirname,'../../Data/learningFileUpload.txt'))


await page.waitForTimeout(3000)


})