// function sum() {
//     console.log(arguments)
// }

// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...rest) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`Thanks to everyone else: ${rest}`)
}