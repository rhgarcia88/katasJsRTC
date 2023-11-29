const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let smallMovies = [];
let mediumMovies = [];
let largeMovies = [];

for (const iterator of movies) {
  if(iterator.durationInMinutes<=100){
    smallMovies.push(iterator);
  }else if(iterator.durationInMinutes>100 && iterator.durationInMinutes<=200){
    mediumMovies.push(iterator);
  }else if(iterator.durationInMinutes>200){
    largeMovies.push(iterator);
  }
}

console.log(`Peliculas cortas: ${smallMovies.map(movie => movie.name).join(', ')}`);
console.log(`Peliculas medianas: ${mediumMovies.map(movie => movie.name).join(', ')}`);
console.log(`Peliculas largas: ${largeMovies.map(movie => movie.name).join(', ')}`);