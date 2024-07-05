// console.log("Its working!!")
// let random = Math.random();
// if(random < 0.5){
//     console.log("Your number is less than 0.5!!")
// }

// else {
//     console.log("Your number is greater than 0.5");
// }
// console.log(random);

// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if (dayOfWeek === 'monday'){
//     console.log('UGHH I hate Mondays!')
// } else if (dayOfWeek === 'saturday'){
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === 'friday'){
//     console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK')
// } else {
//     console.log('MEH')
// }

// 0 - 5 - FREE 
// 5 - 10 - CHILD $10
// 10 - 65 - ADULT $20
// 65+ SENIOR $10

// const age = 8;
// if (age < 5){
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else {
//     console.log("You are a senior. You pay $10")
// }

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password must not have any space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain space!")
    }
    
} else {
    console.log("PASSWORD IS TOO SHORT! Must be 6+ characters")
}

