// Do not use for loops but Map, Filter and Reduce

// Only when counting E.G. Numbers then you may use forloops
// Do not use enhanced for loops
// only when you are not using the output again for more than just a number

const barbieMovie = [
    {name: "Swanlake", year: 2001},
    {name: "Princess and the pauper", year: 2008},
    {name: "Fairies", year: 2014},
];

//map: rate all movies 10
// returnere ny liste
const ratedBarbieMovies = barbieMovie.map(movie => {
    movie.rating=10;
    return movie;
});

console.log(ratedBarbieMovies);

// filter: show movies more recent than 2005
// returnere ny liste
const recentMovies = barbieMovie.filter(movie => movie.year > 2005);

console.log(recentMovies);