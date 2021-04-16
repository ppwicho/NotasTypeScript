export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    // Propiedades
    public id:number;
    public title:string;
    public orientation:PhotoOrientation;

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
    id:number;
    title:string;
    pictures:Picture[]; 

    constructor(id:number,title:string){
        this.id=id;
        this.title=title;
        this.pictures=[];
    }

    addPicture(picture:Picture){
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1,'Personal Pictures');
const picture: Picture = new Picture(1,'Platzi',PhotoOrientation.Square);


album.addPicture(picture);
console.log('album',album);

// Accediendo a los miembros publicos 

picture.id=100;
picture.title='Another Title';

console.log('album',album);


