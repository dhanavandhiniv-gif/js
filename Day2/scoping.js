//var scoping
/* if(true){
    var companyname = 'TEstleaf'
    console.log("Accessing from inside if block", companyname);
    
}
console.log("Accessing from outside if block", companyname); */

//let scoping
/* if(true){
    let companyname = 'TEstleaf'
    console.log("Accessing from inside if block", companyname);
    
}
console.log("Accessing from outside if block", companyname); //company name is not defined */

/* if(true){
    const companyname = 'TEstleaf'
    console.log("Accessing from inside if block", companyname);
    
}
console.log("Accessing from outside if block", companyname); */


//Function scope - varr, let and cost are function scoped so below code will give error for let, var, const
function greet(){
    var message = "Hello"
    
    
}
console.log(message);

greet()