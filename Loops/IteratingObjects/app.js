const testScores = {
    keenan: 80,
    damon: 45,
    kim: 89,
    aditya: 60,
    naman: 84,
    amatya: 70,
    sarthak: 90
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (score of scores) {
    total += score;
}
console.log(total / scores.length)
