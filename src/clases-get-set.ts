export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    // Propiedades
    private id:number; // A partir de ECMA 6 se puede usar # para declarar privado
    private title:string;
    private orientation:PhotoOrientation;

    public constructor(id:number,
                title:string,
                orientation:PhotoOrientation){
                    this.id=id;
                    this.title=title;
                    this.orientation=orientation;
                }
    // Comportamiento 

    public toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation:${this.orientation}]`;
    }
}
class Album{
    private id:number;
    private title:string;
    private pictures:Picture[]; 

    public constructor(id:number,title:string){
        this.id=id;
        this.title=title;
        this.pictures=[];
    }

    public addPicture(picture:Picture){
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1,'Personal Pictures');
const picture: Picture = new Picture(1,'Platzi',PhotoOrientation.Square);


album.addPicture(picture);
console.log('album',album);

// Accediendo a los miembros publicos 

//picture.id=100; // privado
//picture.title='Another Title'; // privado no funciona mejor usar # ecmascript 6
//console.log('album',album);


