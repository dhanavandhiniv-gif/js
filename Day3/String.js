//String Lietral
let commpanyName = `Testleaf`
let firmNAme = `Testleaf`
console.log(commpanyName===firmNAme);
console.log(typeof commpanyName);
console.log(typeof firmNAme);

//Object Lietral
let commpanyNewName = new String( `Testleaf`)
let firmNewName = new String( `Testleaf`)
console.log(commpanyNewName===firmNewName);
console.log(typeof commpanyNewName);
console.log(typeof firmNewName);
console.log(commpanyNewName==firmNewName); //refernce of the objects are different so false even though values are same

/*The strict equality operator (===) compares both value and type. 
For primitive values, it compares the actual value. 
For objects and arrays, it compares references in memory, not their contents.*/
