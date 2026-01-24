import  { test,chromium,firefox,webkit } from "@playwright/test"

test(`Launch Edge and Webkit browser`,async({browserName}) => { 
// Edge browser launch
    const edgebrowser = await chromium.launch({channel: 'msedge',headless: false})
    const edgecontext = await edgebrowser.newContext()
    const edgepage = await edgecontext.newPage()

    await edgepage.goto(`https://www.redbus.in/`)
    const redBusTitle = await edgepage.title()
    const redBusT = edgepage.url()

// Webkit browser launch
    const webkitbrowser = await webkit.launch({headless: false})
    const webkitcontext = await webkitbrowser.newContext()
    const webkitpage = await webkitcontext.newPage()

    await webkitpage.goto(`https://www.flipkart.in/`)
    const flipkartTitle = await webkitpage.title()
    const flipkartUrl =  webkitpage.url()

    // Close browsers and contexts
    await edgecontext.close()
    await edgebrowser.close()
    await webkitcontext.close()
    await webkitbrowser.close()
})