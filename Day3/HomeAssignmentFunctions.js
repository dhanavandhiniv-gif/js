function userProfile(name) {
    console.log("Hello, "+name+ "!");
    
}
userProfile("Alice");

// Type 2 - arrow function
const double = (num) => {
    return num * 2;
};
console.log(double(5));

// Type 3 - Anonymous function with setTimeout
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Type 4 - callback function
function getUserData(callback) {
    setTimeout(() => {
        callback("Call Back Function");
    }, 3000);
}

//call function
getUserData(function(message) {
    console.log(message);
});