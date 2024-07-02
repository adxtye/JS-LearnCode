// let count = 0;
// while (count < 10){
//     console.log(count);
//     count++;
// }

// while(!gameover){
//     //player1 move
//     //player2 move
// }
// congrats!

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input === "stop copying me") {
//         break;
//     }
// }
// console.log("Ok, you win!");

// for (let i = 0; i < 1000; i++){
//     console.log(i);
//     if(i === 100){
//         break;
//     }
// }


let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum){
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum){
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit")
    }
}
if (guess === 'q'){
    console.log("Ok, You Quit!")
} else {
    console.log(`Congrats! You got it, it took you ${attempts} guesses`)
}
