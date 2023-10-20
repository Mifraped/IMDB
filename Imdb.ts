import { Movie } from "./Movie";

export class Imdb{

    public peliculas: Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
}