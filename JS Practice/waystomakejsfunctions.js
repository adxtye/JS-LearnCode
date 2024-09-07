//anonymous function
// function(firstname) {
//     return `${firstname}`;
// }

//function expression
const doctorize = function(lastname) {
    return `Dr. ${lastname}`;
};

//arrow functions
// const inchTocm = function(inch) {
//     return inch * 2.56;
// }

const inchTocm = (inch) => inch * 2.54; 

// function add(a, b = 15) {
//     const total = a + b;
//     return total;
// }

const add = (a, b = 15) => a + b;   

// function makeababy(firstname, lastname) {
//     const baby = {
//         name : `${firstname} ${lastname}`,
//         age: 0
//     };

//     return baby;
// }

// const makeababy = (firstname, lastname) => baby = {name: `${firstname} ${lastname}`, age: 0};

const makeababy = (firstname, lastname) => ({name: `${firstname} ${lastname}`, age: 0});

//IIFE
(function () {
    console.log("Running the Anon function");
    return `You're cool`;
})();

//Methods
const Aditya = {
    name: "Aditya Singh",
    //method
    sayHi: function() {
        console.log(this);
        console.log(`Hey ${this.name}`);
        console.log("Hey Aditya");
        return "Hey Aditya";
    },
    //short hand method
    yell() {
        console.log("HEY ADITYA!!");
    },
    //arrow function
    whisper: () => {
        console.log("hey aditya")
    }
};

const button = document.querySelector('.clickMe');
button.addEventListener("click", Aditya.sayHi);
console.log(button);

setTimeout(Aditya.yell, 3000);
setTimeout(function(){
    console.log("Its time to eat")
}, 5000);