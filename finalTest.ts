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


let pelicula:string = readlineSync.question("Introduce el titulo de la pelicula que quieres modificar: ")
while((imdb.peliculas.filter(elem => elem.title === pelicula)).length === 0){
    pelicula = readlineSync.question("Esta pelicula no existe, prueba con otra: ")
}
let nombre:string = readlineSync.question("Introduce el nombre del profesional a introducir: ")
let edad:number = readlineSync.question("Introduce la edad: ")
let peso:number = readlineSync.question("Introduce el peso: ")
let altura:number = readlineSync.question("Introduce la altura: ")
let estaRetirado:string = readlineSync.question("Esta retirado?(y/n) ")
while((estaRetirado != "y") && (estaRetirado != "n")){
    estaRetirado = readlineSync.question("Por favor, introduce 'y' o 'n' ")
}
let retirado:boolean = estaRetirado === "y"
let nacionalidad:string = readlineSync.question("Introduce la nacionalidad: ")
let numeroOscars:number = readlineSync.question("Introduce el numero de oscars: ")
let profesion:string = readlineSync.question("Introduce la profesion: ")

let profesional = new Professional(nombre,edad,peso,altura,retirado,nacionalidad,numeroOscars,profesion)

for(let movie of instanciaImdb.peliculas){
    for(let atr in movie){
        if(atr === "title" && movie[atr] === pelicula){
            if(profesion === "actor"){
                if(!movie.actors){
                    movie.actors = []
                }
                movie.actors.push(profesional)
            }
            if (profesion === "director") movie.director = profesional
            if (profesion === "guionista") movie.writer = profesional
        }
    }
}
instanciaImdb.escribirEnFicheroJSON("imdbBBDD.json")


