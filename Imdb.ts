import { Movie } from "./Movie";
import * as fs from 'fs'

export class Imdb{

    public peliculas: Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    public escribirEnFicheroJSON(nombreFichero:string):void{
        let stringObj = JSON.stringify(this)
        fs.writeFileSync(nombreFichero,stringObj)
    }
    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        let objBuff = fs.readFileSync(nombreFichero)
        let strObjBuff = objBuff.toString()
        let objImdb = JSON.parse(strObjBuff)
        let instanciaImdb = new Imdb(objImdb.peliculas)
        return instanciaImdb
    }
}