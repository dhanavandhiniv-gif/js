function getBrowser(browserName){
    if(browserName==="chrome"){
        console.log('This is chrome browser');
        

    }
    else
        console.log('This is not chrome');
        
}
getBrowser("chrome")


function getVersion(){
    switch(browser){
        case "chrome":
            console.log("chrome browser");
            break;
        case "edge":
            console.log("edge browser");
            break;
        case "FF":
            console.log("FF browser");
            break;
        default:
            console.log("unsupported browser");
            break;
        
    }
}
let browser = 'FF'
getVersion();