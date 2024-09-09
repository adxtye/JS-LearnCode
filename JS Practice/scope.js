const first = 'Aditya';
let second = 'Singh';
var age = 100;

function sayHi(name) {
    return `Hi ${name}`;
}

function go() {
    const age = 400;
    const hair = 'blond';
    console.log(hair);
    console.log(age);
}

// if(1 === 1){
//     const cool = true;
// }
// console.log(cool); // doesnt work

if(1 === 1){
    var cool = true;
}
console.log(cool);

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('Rufus');
}

go();