// const myMath = {
//     PI : 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

const myMath = {
    PI : 3.14159,
    square (num) {
        return num * num;
    },
    cube (num) {
        return num ** 3;
    }
}

const cat = {
    name : 'Blue Steele',
    color : 'grey',
    breed : 'scottish fold',
    meow() {
        console.log("This is:", this)
        console.log(`${this.name} says MEOWWW`);
    }
}

const meow2 = cat.meow;

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
}

try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!")
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!!!");
    }
}