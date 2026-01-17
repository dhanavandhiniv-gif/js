/* let course = "Playwright"
console.log(`The length of the String is: ${course.length}`);

//charAt
console.log(`The char at index 4 is: ${course.charAt(4)}`);

//indexOf
console.log(`The index of letter 'y' is: ${course.indexOf('y')}`);

//Slice
console.log(`The sliced string is: ${course.slice(2,5)}`);

console.log(`The sliced string is: ${course.slice(5,2)}`);// returns empty string as the start index is greater than end index

console.log(`The sliced string is: ${course.slice(-7,-4)}`); //using negative indexing

console.log(`The sliced string is: ${course.slice(4,-2)}`); //using negative indexing

//substring
console.log(`The substring is: ${course.substring(2,5)}`);
console.log(`The substring is: ${course.substring(5,2)}`); //swaps the values if start index is greater than end index
console.log(`The substring is: ${course.substring(7,-4)}`); //negative indexing not supported, it will consider as 0
 */
//reverse a string
let companyName = "Testleaf"
for (let index = companyName.length - 1; index >= 0; index--) {
    let element = companyName.charAt(index);
    process.stdout.write(element);
}

