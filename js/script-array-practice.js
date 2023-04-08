//STEP 1
// let movies = ["Lars and the Real Girl", "Rocky Horror Picture Show", "Out of Africa", "Terms of Endearment", "The Woman King"];
// console.log(movies[1]);

//STEP 2
// let movies2 = new Array(5);
// movies2[0] = "Lars and the Real Girl";
// movies2[1] = "Rocky Horror Picture Show";
// movies2[2] = "Out of Africa";
// movies2[3] = "Terms of Endearment";
// movies2[4] = "The Woman King";
// console.log(movies2[0]);

//STEP 3
// let movies2 = new Array(5);
// movies2[0] = "Lars and the Real Girl";
// movies2[1] = "Rocky Horror Picture Show";
// movies2[2] = "Out of Africa";
// movies2[3] = "Terms of Endearment";
// movies2[4] = "The Woman King";
// movies2.splice(3, 0, "Avatar");
// console.log(movies2.length);

//STEP 4
// let movies3 = [];
// movies3[0] = "Lars and the Real Girl";
// movies3[1] = "Rocky Horror Picture Show";
// movies3[2] = "Out of Africa";
// movies3[3] = "Terms of Endearment";
// movies3[4] = "The Woman King";
// delete movies3[0];
// console.log(movies3);

//STEP 5
// let movies4 = [];
// movies4[0] = "Lars and the Real Girl";
// movies4[1] = "Rocky Horror Picture Show";
// movies4[2] = "Out of Africa";
// movies4[3] = "Terms of Endearment";
// movies4[4] = "The Woman King";
// movies4[5] = "Avatar"
// movies4[6] = "Paris, Texas"
// for (movie in movies4) {
//     console.log(movies4[movie]);
// };

//STEP 6
// let movies4 = [];
// movies4[0] = "Lars and the Real Girl";
// movies4[1] = "Rocky Horror Picture Show";
// movies4[2] = "Out of Africa";
// movies4[3] = "Terms of Endearment";
// movies4[4] = "The Woman King";
// movies4[5] = "Avatar"
// movies4[6] = "Paris, Texas"
// for (movie of movies4) {
//     console.log(movie);
// }

//STEP 7
// let movies4 = [];
// movies4[0] = "Lars and the Real Girl";
// movies4[1] = "Rocky Horror Picture Show";
// movies4[2] = "Out of Africa";
// movies4[3] = "Terms of Endearment";
// movies4[4] = "The Woman King";
// movies4[5] = "Avatar";
// movies4[6] = "Paris, Texas";
// for (movie of movies4.sort()) {
//     console.log(movie);
// };

//STEP 8
// let movies4 = [];
// movies4[0] = "Lars and the Real Girl";
// movies4[1] = "Rocky Horror Picture Show";
// movies4[2] = "Out of Africa";
// movies4[3] = "Terms of Endearment";
// movies4[4] = "The Woman King";
// movies4[5] = "Avatar"
// movies4[6] = "Paris, Texas"

// leastFavMovies = ["Jaws", "The Legend of Billy Jack", "Plandemic"];

// console.log("Movies I like:");
// console.log("");
// for (movie of movies4) {
//     console.log(movie);
// }
// console.log("");
// console.log("Movies I regret watching:");
// console.log("");
// for (movie of leastFavMovies) {
//     console.log(movie);
// };

//STEP 9
// let movies4 = [];
// movies4[0] = "Lars and the Real Girl";
// movies4[1] = "Rocky Horror Picture Show";
// movies4[2] = "Out of Africa";
// movies4[3] = "Terms of Endearment";
// movies4[4] = "The Woman King";
// movies4[5] = "Avatar"
// movies4[6] = "Paris, Texas"

// leastFavMovies = ["Jaws", "The Legend of Billy Jack", "Plandemic"];

// let movies = movies4.concat(leastFavMovies);
// movies.sort().reverse();

// for (movie of movies) {
//     console.log(movie);
// };

//STEP 10
// let movies4 = [];
// movies4[0] = "Lars and the Real Girl";
// movies4[1] = "Rocky Horror Picture Show";
// movies4[2] = "Out of Africa";
// movies4[3] = "Terms of Endearment";
// movies4[4] = "The Woman King";
// movies4[5] = "Avatar"
// movies4[6] = "Paris, Texas"

// leastFavMovies = ["Jaws", "The Legend of Billy Jack", "Plandemic"];

// let movies = movies4.concat(leastFavMovies);
// movies.sort().reverse();

// console.log(movies.pop());

//STEP 11
// let movies4 = [];
// movies4[0] = "Lars and the Real Girl";
// movies4[1] = "Rocky Horror Picture Show";
// movies4[2] = "Out of Africa";
// movies4[3] = "Terms of Endearment";
// movies4[4] = "The Woman King";
// movies4[5] = "Avatar"
// movies4[6] = "Paris, Texas"

// let leastFavMovies = ["Jaws", "The Legend of Billy Jack", "Plandemic"];

// let movies = movies4.concat(leastFavMovies);
// movies.sort().reverse();

// console.log(movies.shift());

//STEP 12
let movies4 = [];
movies4[0] = "Lars and the Real Girl";
movies4[1] = "Rocky Horror Picture Show";
movies4[2] = "Out of Africa";
movies4[3] = "Terms of Endearment";
movies4[4] = "The Woman King";
movies4[5] = "Avatar"
movies4[6] = "Paris, Texas"

let leastFavMovies = ["Jaws", "The Legend of Billy Jack", "Plandemic"];

let movies = movies4.concat(leastFavMovies);
let replacements = ["The Help", "I Am Not Your Negro", "Summer of Soul"]

for (let i = 0; i < leastFavMovies.length; i++ ) {
    let index = movies.findIndex( function ckMovie(movie) { return movie === leastFavMovies[i]; } );
    movies[index] = replacements[i];
}

console.log(movies);

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17