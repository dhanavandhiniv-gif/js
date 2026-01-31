//type alias has two types
//Union type --> either this or other value
//Intersection type


let username: string | number


username = "ravi@testleaf"
username = 987979435


//alias name for datatype
type InputType = number | string | boolean


let formInput: InputType; // 
formInput = "Ravindran", // text field
formInput = 30, // age field
formInput = true // checknbox


//Here InputType is a customized datatype used to handle values of certain predefined datatypes



//type for value 
//alias name for value


type supportedBrowser = "Chrome"|"firefox"|"edge"


function invokeBrowser(browserName : supportedBrowser ){


if(browserName==="Chrome"){
console.log("Launch Chrome");

}else{
console.log("Firefox browser"); 
}
}


invokeBrowser("Chrome")