//type alias has two types
//Union type --> either this or other value
//Intersection type
var username;
username = "ravi@testleaf";
username = 987979435;
var formInput; // 
formInput = "Ravindran", // text field
    formInput = 30, // age field
    formInput = true; // checknbox
function invokeBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome");
    }
    else {
        console.log("Firefox browser");
    }
}
invokeBrowser("Chrome");
