import { Professional } from "./professional";

export class Movie{

    public title:string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    public toString(): void{
        console.log(this);
    }

}