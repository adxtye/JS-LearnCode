const scores = [12232, 23365, 39876, 43212, 68939, 93923];

const lowScore = scores[0];
const secondlowScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'harvey@gmail.com',
    password: 'sCsof8ehks',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1980,
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzales',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const firstName = user.firstName;
const lastName = user.lastName;

const email = user.email;
const { email, firstName, lastName, city } = user;

const { born: birthYear, died: deathYear = 'N/A', bornPlace = 'N/A'} = user2;

function fullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

function fullName({ firstName, lastName}) {
    return `${firstName} ${lastName}`;
}