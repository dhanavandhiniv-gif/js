import { test } from "@playwright/test";

// test(`Learn frames interaction`,async ({page}) => {



// await page.goto(`https://leafground.com/frame.xhtml`);


// const frameRef = page.frameLocator(`[src="default.xhtml"]`) // Step1 idetify the frame in which that element is present


// await frameRef.locator("#Click").click(); // Step2 the control moves into the frame==> page


// //mainpage => await page.locator("#Click")
// await page.waitForTimeout(3000)
// })



test.only(`Learn nested frames interaction`,async ({page}) => {



await page.goto(`https://leafground.com/frame.xhtml`);


const frameRefOuterFrame = page.frameLocator(`[src="page.xhtml"]`) // Step1 idetify the outer frame in which that element is present



const frameRefInnerrFrame = frameRefOuterFrame.frameLocator(`[id="frame2"]`)

await frameRefInnerrFrame.locator("#Click").click(); // Step2 the control moves into the frame==> page

//mainpage => await page.locator("#Click")
await page.waitForTimeout(3000)
})