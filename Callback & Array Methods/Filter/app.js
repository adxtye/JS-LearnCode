const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pass = numbers.filter(n => {
    return n === 4;
})

const pass2 = numbers.filter(n => {
    return n < 5;
})

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

const goodMovies = movies.filter(movie => {
    return movie.score > 9;
})
const badMovies = movies.filter(m => m.score < 6)
const goodTitles = goodMovies.filter(m => m.title)

const names = ['aditya', 'skdhfjkhfkjshf', 'myname'];

// function validUserNames(usernames) {
//     usernames.filter(valid => {
//         return valid.length < 10;
//     })
// }

let myName = 'Aditya';
const noofchar = myName.length;

const validUserNames = names.filter(valid => valid.length < 10)