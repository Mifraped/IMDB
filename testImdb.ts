import { Movie } from "./Movie";
import { Imdb } from "./Imdb";

let movie1:Movie = new Movie("Aventuras de Pedrito", 2023, "España", "Ciencia Ficcion");
let movie2:Movie = new Movie("Romance Down", 2023, "Francia", "Romántica");
let movie3:Movie = new Movie("Vengadores", 2012, "USA", "Acción");

let arr:Movie[] = [movie1, movie2, movie3];
let imdb:Imdb = new Imdb(arr);

console.log(imdb);
