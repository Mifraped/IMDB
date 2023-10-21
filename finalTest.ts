import { Professional } from "./professional"
import { Movie } from "./Movie";
import { Imdb } from "./Imdb";
import { log } from "console";
let readlineSync = require("readline-sync")

let movie1:Movie = new Movie("Aventuras de Pedrito", 2023, "España", "Ciencia Ficcion");
let movie2:Movie = new Movie("Romance Down", 2023, "Francia", "Romántica");
let movie3:Movie = new Movie("Vengadores", 2012, "USA", "Acción");

let arr:Movie[] = [movie1, movie2, movie3];

let imdb:Imdb = new Imdb(arr);

imdb.escribirEnFicheroJSON("imdbBBDD.json")
let instanciaImdb = imdb.obtenerInstanciaIMDB("imdbBBDD.json")


let pelicula = readlineSync.question("Introduce el titulo de la pelicula que quieres modificar: ")
let nombre = readlineSync.question("Introduce el nombre del profesional a introducir: ")
let edad = readlineSync.question("Introduce la edad: ")
let peso = readlineSync.question("Introduce el peso: ")
let altura = readlineSync.question("Introduce la altura: ")
let estaRetirado = readlineSync.question("Esta retirado? ")
let nacionalidad = readlineSync.question("Introduce la nacionalidad: ")
let numeroOscars = readlineSync.question("Introduce el numero de oscars: ")
let profesion = readlineSync.question("Introduce la profesion: ")

let profesional = new Professional(nombre,Number(edad),Number(peso),Number(altura),Boolean(estaRetirado),nacionalidad,Number(numeroOscars),profesion)

for(let movie of instanciaImdb.peliculas){
    for(let atr in movie){
        if(atr === "title" && movie[atr] === pelicula){
            if(profesion === "actor"){
                if(!movie.actors){
                    movie.actors = []
                    movie.actors.push(profesional)
                }
            }else movie.actors.push(profesional)
            if (profesion === "director") movie.director = profesional
            if (profesion === "writer") movie.writer = profesional
        }
    }
}
instanciaImdb.escribirEnFicheroJSON("imdbBBDD.json")


