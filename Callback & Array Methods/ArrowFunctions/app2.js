// console.log("HELLO!!....");
// setTimeout(() => {
//     console.log("...are you still there??")
// }, 3000)

// console.log("GOODBYE!!");

// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000)

// clearInterval();

const person = {
    firstName : 'Viggo',
    lastName : 'Mortensen',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`
    }
}