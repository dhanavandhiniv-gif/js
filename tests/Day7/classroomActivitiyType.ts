type PaymentMethod = "UPI"|"CreditCard"|"PayPal"


function makePayment(paymentMethod : PaymentMethod){

if(paymentMethod==="UPI"){
console.log("Payment through UPI", paymentMethod);

}else if(paymentMethod==="CreditCard"){
console.log("Payment through CreditCard", paymentMethod); 
}
else{
console.log("Payment through PayPal", paymentMethod); 
}
}

makePayment("UPI");