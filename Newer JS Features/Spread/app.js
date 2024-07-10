const nums = [1, 2, 3, 4, 5, 56, 72, 64, 88];
Math.max(nums);
Math.max(...nums);


const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];


const allPets = [...cats, ...dogs];


const feline = { legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'};


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123',
    username: 'tfunke'
}
const newUser = {...dataFromForm, id: 2345, isAdmin: false}
