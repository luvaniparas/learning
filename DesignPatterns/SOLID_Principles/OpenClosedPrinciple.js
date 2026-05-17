class PaymentProcessor{
    processPayment(amount) {
        throw new Error("ProcessPayment must be implemented ...");
    }
}

class UpiPaymentProcess extends PaymentProcessor{
    processPayment(amount){
        console.log("UPI Payment is Processing: ", amount);
    }
}

class CreditCardPaymentProcess extends PaymentProcessor{
    processPayment(amount){
        console.log("CreditCard Payment is Processing: ", amount);
    }
}

function main(){
    const paymentProcessor = new PaymentProcessor();
    const upiPaymentProcess = new UpiPaymentProcess();
    const creditCardPaymentProcess = new CreditCardPaymentProcess();
    
    // paymentProcessor.processPayment();
    upiPaymentProcess.processPayment(100);
    creditCardPaymentProcess.processPayment(1000);
    
}
main();