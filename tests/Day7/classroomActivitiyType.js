function makePayment(paymentMethod) {
    if (paymentMethod === "UPI") {
        console.log("Launch UPI");
    }
    else if (paymentMethod === "CreditCard") {
        console.log("CreditCard");
    }
    else {
        console.log("PayPal");
    }
}
makePayment("UPI");
