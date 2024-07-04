const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print)

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})

for (let el of numbers) {
    console.log(el);
}

const movies = [
    {
        title: 'A Silent Voice',
        score: 9
    },
    {
        title: 'Your Name',
        score: 10
    },
    {
        title: 'Weathering with You',
        score: 8
    }
]

movies.forEach(function (movie){
    console.log(`${movie.title} - ${movie.score}/10`);
})