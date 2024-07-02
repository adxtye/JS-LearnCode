// let value = [];
// var todo = "Something";
// value.push(todo);
// var todo = "HAHA";
// value.push(todo);
// console.log(value);

// for (let i = 0; i < todo.length; i++){
//     console.log(`${i}: ${todo[i]}`);
// }

// let arr = [1, 2, 3, 4, 5];

// let deleteInd = parseInt(prompt("Enter the index of todo to delete"));
// while (!deleteInd) {
//     deleteInd = parseInt(prompt("Enter a valid index of todo to delete"));
// }

// arr.splice(deleteInd, 1);
// console.log(arr);

// let integer;
// let entry = false;

// while (integer !== 'quit' ) {
//     integer = prompt("Enter the integer");
//     if (integer = 1){
//          console.log("cool");
//     }
//     else if (integer = 2){
//         console.log("great");
//     }
//     else if (integer = 'quit') {
//         break;
//     }
//     else {
//         console.log("Put a valid number");
//     }
// } 

// if (integer = 'quit'){
//     console.log("The End");
// }

// function lastElement(arr) {
//     return arr[arr.length-1];
// }

// function capitalize(str){
//     return str[0].toUpperCase();
// }

// // let msg1 = 'E';
// // let msg2 = 'ggplant';
// let str = "aditya";
// let firstLetter = str[0].toUpperCase();
// console.log(firstLetter);

// let arr = str.split('');
// console.log(arr);

// arr.shift();
// console.log(arr);

// str.slice(1, 0);
// console.log(str);



// let msg3 = firstLetter + str;
// console.log(msg3);

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

function returnDay(day) {
    switch(day) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;
        default:
            return null;    
    }
}