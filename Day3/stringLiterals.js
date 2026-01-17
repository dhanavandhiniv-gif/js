/* index  meaning in Node String.js 400 => process.argv[2]-->get data from terminal
-----  -------------------------
0      Node executable path
1      Script file path
2+     Actual arguments you passed */
// /* String declaration - "",'',`` */


// /* 1. String literal
// 2. Object literal */


// //String literal : (This will be handled in Stack Memory)


 /* let companyName = Testleaf; // Address : 100
 let firmName = Testleaf; // Address : 100
console.log(companyName===firmName);// true */

// //Object literal : (This will be handled in Heap Memory)


 /* let companyNameNew = new String(Testleaf); // Address : 101
 let firmNameNew = new String(Testleaf); // Address : 102
 console.log(companyNameNew===firmNameNew);// false */



// /* ****************** */


// //String Methods :


// //Escape Sequence : \, \n,\t


 let testEsc = 'It\'s a regression \n testing' // \n => newline
 console.log(testEsc);



 let testEscDbl = "Hello\t this is a \"double quote\""// \t=> tab
 console.log(testEscDbl);


// //concatenation -- Using concat() method and '+'


let testCase ="create a new lead"
let testCaseId = 123


let resultConcat = testCase.concat(testCaseId)
console.log(resultConcat);


let resultConcatToString = testCaseId.toString().concat(testCase)
console.log(resultConcatToString);


let resultPlus = testCaseId+"-"+testCase+" passed in the execution"
console.log(resultPlus);


//Template Literal --> ${}


function funName(x){ // x=400


let output = `There is ${x} testcases`
    console.log(output);    
}
let inputValue = process.argv[2]; //[node .\02-string.js 400 ] // node = 0, \02-string.js=1 ,400 =2 


funName(inputValue)