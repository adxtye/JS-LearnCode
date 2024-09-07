

function calculateBill(bill, taxrate = 1.13) {
    console.log('Running Calculate bill')
    total = bill * taxrate;
    return total;
}

// const myBill = calculateBill(100, 1.15);
// const myBill2 = calculateBill(200, 1.13);
// console.log(myBill, myBill2);

function sayHiTo(firstname) {
    return `Hello, my name is ${firstname}`;
}

function yell(name = '') {
    return `HEY ${name.toUpperCase()}!`;
}

function doctorize(name) {
    return `Dr. ${name}`;
}

const greetings = sayHiTo();

