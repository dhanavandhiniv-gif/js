//post increment
let x = 10
console.log(x++); //x=10 in line 3
console.log(x); //x=11

//pre increment
let y = 10
console.log(y--); //y=10
console.log(y); //y=9

//post decrement
let a = 10
console.log(++a); //a=10
console.log(a); //a=10

//pre decrement
let b = 10
console.log(--b); //a=9
console.log(b); //a=9


//strict equality = "==="
/* compare datatype and the 
   compare the value */
console.log(1===1); //output is true
console.log(1==="1"); //output is false
console.log(1===true); //false


//Lose euqlity = "=="
/* compare the value */
console.log("1"==1); //true, the concept called type cpercion
//here due to concept of type cpercion the data type string is get converted to number
console.log(1==true);//internally true is converted to 1, false is converted to 0


