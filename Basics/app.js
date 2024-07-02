// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;

// let die1 = rollDie();
// let die2 = rollDie();
// let die3 = rollDie();
// let die4 = rollDie();
// let die5 = rollDie();
// let die6 = rollDie();

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}    

// function greet(firstName) {
//     // console.log(`firstname is: ${firstName}`)
//     console.log(firstName.toUpperCase());
//     console.log(`Hey there, ${firstName}!`);
// }

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.!`);
}

function repeat(msg, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += msg;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}