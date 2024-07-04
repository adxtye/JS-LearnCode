const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map(function (num) {
    return num * 2;
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

const capMovie = movies.map(function (movie) {
    return movie.title.toUpperCase();
})