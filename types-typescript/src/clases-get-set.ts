export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    // Propiedades
    private _id:number; // A partir de ECMA 6 se puede usar # para declarar privado
    private _title:string;
    private _orientation:PhotoOrientation;

    public constructor(id:number,
                title:string,
                orientation:PhotoOrientation){
        this._id=id;
        this._title=title;
        this._orientation=orientation;
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }
        
    // Comportamiento 

    public toString(){
        return `[id: ${this._id},
                title: ${this._title},
                orientation:${this._orientation}]`;
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

console.log('picture.id',picture.id); // get id()

picture.id=100; // hacemos uso de los metodos accesores
picture.title='Another Title'; // privado no funciona mejor usar # ecmascript 6
console.log('album',album);


