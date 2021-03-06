
const $ = require('jquery');
const sayHello = require("./say-hello")

// function sayHello() {
//     console.log("Hello")
// }
//
// sayHello();

console.log(sayHello);

const {getMovies} = require('./api.js');

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});
