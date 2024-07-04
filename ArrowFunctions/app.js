// const add = function (x, y) {
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

const square = (a) => {
    return a**2;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const cube = (a) => (
    a**3    //implicit return
)

const sub = (x, y) => x - y

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

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map(movie => {
    return `${movie.title} - ${movie.score / 10}`
})
    
