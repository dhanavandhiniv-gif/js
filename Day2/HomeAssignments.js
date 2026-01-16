//odd or even
function isOddOrEven(num){
if(num/2==1)
    console.log("odd number");
else
    console.log("Even number");
}
isOddOrEven(6) 

//categorize a number as positive, negative, or zero using conditional statements
function checkNumberType(num) {
    if(num>0)
        console.log("Positive Number");
    else if(num<0)
        console.log("Negative number");
    else
        console.log("Zero");       
}
checkNumberType(1);

//LaunchBrowser
function launchBrowser(browserName) {
    if(browserName=="chrome")
        console.log("Launching Chrome");
    else
        console.log("Launch another browser");        
}
launchBrowser("chrome")

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke");
            
            break;
        case "sanity":
            console.log("Running sanity");
            
            break;
        case "regression":
            console.log("Running regression");
            
            break;
    
        default:
            console.log("Running Smoke test");
            
            break;
    }
}
runTests("regression")

//global scope
genderType = "male"
function printGender() {
   let color = "brown"
   if(genderType.startsWith("female")){
    var age = 30
    let color = "pink"
    console.log("color inside if block:"+color); //prints pink
    
   }
   console.log("Age outside if block: "+age);   
}
printGender();
console.log("Value of genderType: "+genderType);
